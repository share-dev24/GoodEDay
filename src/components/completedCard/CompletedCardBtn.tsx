import { useNavigate } from 'react-router-dom';
import BasicButton from '../common/BasicButton';
import { ICompletedCardBtnProps } from '../../types/completedCardType';
import { useUserStore } from '../../stores/store';
import { Timestamp, collection, doc, setDoc } from 'firebase/firestore';
import { firebaseDb } from '../../../firebase';
import { useState } from 'react';
import PopupLayout from '../posts/PopupLayout';
import ShareCard from './ShareCard';

export default function CompletedCardBtn({
  data
}: {
  data: ICompletedCardBtnProps;
}) {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const { uid, displayName } = useUserStore((state) => ({
    displayName: state.displayName,
    uid: state.uid
  }));
  const navigate = useNavigate();

  const resetBtn = () => {
    const agree = confirm('카드를 다시 생성하시겠습니까?');

    if (!agree) return;
    navigate(-1);
  };

  const storageCard = async () => {
    if (data.cardName === '') {
      return alert('카드 제목을 작성해 주세요!');
    }

    const cardData = {
      addressMapUrl: data.selectPlace.place_url,
      address: data.selectPlace.address_url,
      cardTitle: data.cardName,
      createdTime: Timestamp.fromDate(new Date()),
      name: displayName,
      people: parseInt(data.numbers),
      randomTodo: data.randomTodo?.desc,
      reviewCheck: false,
      scope: parseInt(data.range),
      theme: data.theme,
      uid
    };

    try {
      const cardListRef = await doc(
        collection(firebaseDb, 'randomCards', `${uid}`, 'cardsList')
      );
      await setDoc(cardListRef, cardData);
      alert('랜덤카드가 정상적으로 저장되었습니다 😀');
      navigate('/user-page');
    } catch (error) {
      console.log(`카드 저장 에러 발생 : ${error}`);
    }
  };

  const handlePopupOpen = () => {
    if (data.cardName === '') {
      return alert('카드 제목을 작성해 주세요!');
    }
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center gap-3xl'>
        <section className='w-full grid grid-cols-2 gap-3xl'>
          <BasicButton text='다시 생성하기' onClick={resetBtn} />
          <BasicButton text='카드 공유하기' onClick={handlePopupOpen} />
        </section>
        <BasicButton text='나의 카드 목록에 저장하기' onClick={storageCard} />
      </div>
      {/* 팝업 영역 */}
      {isPopupOpen && (
        <PopupLayout onPopupClose={handlePopupClose}>
          <ShareCard data={data} />
        </PopupLayout>
      )}
    </>
  );
}
