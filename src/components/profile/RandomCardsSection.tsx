import { useNavigate } from 'react-router-dom';
import SubTitle from '../common/SubTitle';
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components';
import { getRandomCardsData } from '../../fetch/get'
import type { IRandomCardType } from '../../types/randomCardType';
import SmallButton from '../common/SmallButton';
import PostCardsGrid from '../posts/PostCardsGrid';
import getTimeSimple from '../../modules/TimeCompiler';


interface IRandomCardSection {
    displayName: string | null
}

const CardContainer = styled.div<{ $image: string, $cardTitle: string }>`
  width: 167px;
  height: 270px;
  margin-bottom: 8px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.05);
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),url(${(props) => props.$image});
  }

  &:hover div {
    display: block;
  }

  
`;

const fetchRandomCardsData = async (): Promise<IRandomCardType[]> => {
    const data = await getRandomCardsData();
    return data || []
}

export default function RandomCardsSection({ displayName }: IRandomCardSection) {
    const { data: randomCardsData } = useQuery({ queryKey: ['fetchRandomCards'], queryFn: fetchRandomCardsData })
    const navigate = useNavigate()

    const handleCardClick = (cardId: string) => {
        navigate(`create-post/${cardId}`)
    }

    return (
        <article>
            <SubTitle text={`${displayName}님의 굳이데이 카드 목록 👍🏻 (${randomCardsData?.length})`} />
            <PostCardsGrid>
                {randomCardsData?.map((card: IRandomCardType) => (
                    <div key={card.cardId} >
                        <CardContainer $image={`src/assets/images/${card.theme}.jpeg`} $cardTitle={card.cardTitle}>
                            <div className='absolute p-md text-white text-lg font-bold hidden'>
                                <span className=''>{card.cardTitle}</span><br />
                                <span className='w-full'>{getTimeSimple(card.createdTime)}</span>
                            </div>
                        </CardContainer>
                        {
                            card.reviewCheck ?
                                <SmallButton text='포스트작성하기' onClick={() => { handleCardClick(card.cardId) }} disabled={false} /> :
                                <SmallButton text='포스트작성하기' onClick={() => { handleCardClick(card.cardId) }} disabled={true} />
                        }
                    </div>
                ))}



            </PostCardsGrid>
        </article>
    )

}