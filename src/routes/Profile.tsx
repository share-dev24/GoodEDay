import { useUserStore } from '../stores/store';
import type { UserState } from '../types/staticType';
import { Outlet } from 'react-router-dom';
import SubTitle from '../components/common/SubTitle';
import NameChangeInput from '../components/profile/NameChangeInput'
import { useState } from 'react';

export default function Profile() {


  const [cardCount] = useState(1)
  const { displayName, photo } = useUserStore<UserState>((state) => ({
    displayName: state.displayName,
    uid: state.uid,
    photo: state.photo,
    setUser: state.setUser,
  }));
  const defaultUserImage = 'src/assets/images/user.svg'

  return (
    <>
      <div className='flex gap-[20px] p-[20px] border-b-2 border-solid border-b-gray'>
        <div className='flex relative'>
          <img src={photo ? photo : defaultUserImage} alt='프로필이미지' className='w-[40px] h-[40px] rounded-full' />
          <button className='w-[20px] h-[20px] absolute bottom-[0px] right-[-10px]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='fill-primary stroke-white'>
              <path strokeLinecap='round' strokeLinejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125' />
            </svg>
          </button>
        </div>
        <NameChangeInput />
      </div >
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
