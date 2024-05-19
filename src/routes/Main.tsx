import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainTitle from '../components/common/MainTitle';
import SubTitle from '../components/common/SubTitle';
import ThemeCardsGrid from '../components/common/ThemeCardsGrid';
import ThemeCard from '../components/common/ThemeCard';
import { themeCardData } from '../stores/static';
import PostCardsSection from '../components/posts/PostCardsSection';

const BannerContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('src/assets/images/banner.jpeg');
  padding-top: 100px;
  padding-left: 30px;
  height: 300px;
  background-size: cover;
  background-position: center;
`;

export default function Main() {
  return (
    <div>
      <BannerContainer>
        <h2 className='text-[30px] font-bold text-white'>
          굳이? 굳이! <br /> 특별한 하루를 위한 <span className='text-primary'>굳이데이</span>
        </h2>
        <div className='text-white py-[20px]'>
          <p className='py-[10px]'>🎲 다양한 옵션 설정으로 나만의 랜덤 굳이데이 카드를 만들어요</p>
          <p>👫 내가 실천한 굳이데이를 다른 사람들과 공유해요</p>
        </div>
      </BannerContainer>
      <MainTitle text='굳이 ? 굳이! 굳이데이로 재밌는 추억 만들기 ✌🏻' />
      <SubTitle text='테마가 설정된 카드를 사용하면 더 쉽게 굳이데이 카드를 생성할 수 있어요!' />
      <ThemeCardsGrid>
        {themeCardData.map((card, index) => (
          <ThemeCard
            key={index}
            theme={card.theme}
            imageUrl={card.imageURL}
            content={card.title}
          />
        ))}
      </ThemeCardsGrid>
      <div className='flex justify-between'>
        <MainTitle text='나의 굳이데이를 자랑해보세요 ✍🏻' />
        <Link to='posts' className='p-sm text-10px flex items-center'>전체보기</Link>
      </div>
      <PostCardsSection rowInit={2} />
    </div>
  );
}
