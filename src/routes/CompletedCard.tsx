import { useLocation } from 'react-router-dom';
import CreateFormTitle from '../components/createCard/CreateFormTitle';
import FormContainer from '../components/common/FormContainer';
import KakaoMap from '../components/completedCard/KakaoMap';
import { useCallback, useState } from 'react';
import { changeTheme } from '../modules/map/map';
import CompletedCardBtn from '../components/completedCard/CompletedCardBtn';

export default function CompletedCard() {
  const { numbers, range, selectPlace } = useLocation().state;
  const name = sessionStorage.getItem('name');
  const theme = changeTheme(selectPlace.category_group_code);
  const [cardName, setCardName] = useState('');

  const handleOnchangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCardName(e.target.value);
    },
    []
  );

  const CardInfoBox = () => {
    return (
      <p className='text-xs text-black'>
        <span className='font-semibold'>테마</span> : {theme} /{' '}
        <span className='font-semibold'>범위</span> :{' '}
        {range === '제한없음' ? '전체' : `내 위치에서 ${range}km 이내`} /{' '}
        <span className='font-semibold'>인원</span> :{' '}
        {numbers === '1' ? '나 혼자' : `${numbers}명`} /{' '}
        <span className='font-semibold'>굳이 할 일은?</span> : 커피 마시면서 책
        읽기!
      </p>
    );
  };

  return (
    <main className='w-[400px] mx-auto pt-[100px] flex flex-col justify-center items-center gap-[50px]'>
      <CreateFormTitle page='completed' name={name ?? null} />
      <FormContainer>
        <section className='w-[80%] flex flex-col justify-center items-center gap-4xl'>
          <div className='w-full flex flex-col justify-center items-center gap-sm text-center'>
            <p className='w-full text-sm text-primary font-semibold'>
              굳이데이 카드 제목을 지어주세요!
            </p>
            <input
              type='text'
              value={cardName}
              onChange={handleOnchangeName}
              className='w-full p-5px border border-solid border-primary rounded-md focus:outline-none'
            />
          </div>
          <div className='w-full flex flex-col justify-center items-center gap-3xl'>
            <div className='w-full flex flex-col justify-center items-center text-lg font-bold'>
              <p className='text-primary'>굳이? 굳이!</p>
              <p className='text-black'>{theme}에 가고 싶은 날</p>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-5px text-center text-black'>
              <p className='text-lg font-bold'>
                카페에 가서 커피도 마시고 책도 읽으면서 힐링을 해볼까요?️
              </p>
              <CardInfoBox />
            </div>
          </div>
          <KakaoMap data={selectPlace} />
        </section>
      </FormContainer>
      <CompletedCardBtn />
    </main>
  );
}
