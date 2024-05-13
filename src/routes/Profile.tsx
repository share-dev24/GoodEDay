import { useUserStore } from '../stores/store';
import type { UserState } from '../types/staticType';
import { Outlet } from 'react-router-dom';
import SubTitle from '../components/common/SubTitle';
import { useState } from 'react';
import ProfileChange from '../components/profile/ProfileChange';


export default function Profile() {


  const [cardCount] = useState(1)
  const { displayName } = useUserStore<UserState>((state) => ({
    displayName: state.displayName,
    uid: state.uid,
    photo: state.photo,
    setUser: state.setUser,
  }));

  return (
    <>
      <ProfileChange />
      {/* 카드영역 */}
      <div className='mt-[20px]' >
        <SubTitle text={`${displayName}님의 굳이데이 카드 목록 👍🏻 (${cardCount})`} />
        <div>

        </div>
      </div >

      {/* 회원 페이지에서 카드 후기 작성 클릭하면 작성 페이지가 팝업처럼 보이기 위해 작성 페이지를 아래 하위로 위치 */}
      < Outlet />
    </>
  );
}
