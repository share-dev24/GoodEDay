import { useNavigate } from 'react-router-dom';
import SubTitle from '../common/SubTitle';
import { useQuery } from '@tanstack/react-query'
import { getRandomCardsData } from '../../fetch/get'
import type { IRandomCardType } from '../../types/randomCardType';
import SmallButton from '../common/SmallButton';
import PostCardsGrid from '../posts/PostCardsGrid';
import getTimeSimple from '../../modules/TimeCompiler';

interface IRandomCardSection {
    displayName: string | null;
}

const fetchRandomCardsData = async (): Promise<IRandomCardType[]> => {
    const data = await getRandomCardsData();
    return data || [];
}

export default function RandomCardsSection({ displayName }: IRandomCardSection) {
    const { data: randomCardsData } = useQuery({ queryKey: ['fetchRandomCards'], queryFn: fetchRandomCardsData });
    const navigate = useNavigate();

    const handleCardClick = (cardId: string) => {
        navigate(`create-post/${cardId}`);
    }

    return (
        <article>
            <SubTitle text={`${displayName}님의 굳이데이 카드 목록 👍🏻 (${randomCardsData?.length ?? 0})`} />
            <PostCardsGrid>
                {randomCardsData?.map((card: IRandomCardType) => (
                    <div key={card.cardId} className='group relative'>
                        <div className='w-[167px] h-[270px] overflow-hidden rounded-lg mb-[8px] '>
                            <img
                                src={`src/assets/images/${card.theme}.jpeg`}
                                alt='랜덤카드'
                                className='w-[167px] h-[270px] object-cover rounded-lg mb-[8px] relative group-hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <div className='p-md w-[167px] h-[270px] absolute top-[0px] left-[0px] rounded-lg flex flex-col gap-4px bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <span className=''>{card.cardTitle}</span>
                            <span className='text-sm font-light'>{getTimeSimple(card.createdTime)}</span>
                        </div>
                        {card.reviewCheck ? (
                            <SmallButton text='포스트작성하기' onClick={() => handleCardClick(card.cardId)} disabled={false} />
                        ) : (
                            <SmallButton text='포스트작성하기' onClick={() => handleCardClick(card.cardId)} disabled={true} />
                        )}
                    </div>
                ))}
            </PostCardsGrid>
        </article>
    );
}
