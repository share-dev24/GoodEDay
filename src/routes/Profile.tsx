// 회원 페이지

import { Outlet } from 'react-router-dom';
import SubTitle from '../components/common/SubTitle';
import { useState } from 'react';

export default function Profile() {
  const [userName] = useState<string>('user')
  const [cardCount] = useState<number>(0)
  return (
    <>
      <div className='flex gap-[20px] p-[20px] border-b-2 border-solid border-b-gray'>
        <div className='flex relative'>
          <img src='' alt='프로필이미지' className='w-[40px] h-[40px] rounded-full border border-solid' />
          <button className='w-[20px] h-[20px] absolute bottom-[0px] right-[-10px]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke-width='1' stroke='currentColor' className='fill-primary stroke-white'>
              <path stroke-linecap='round' stroke-linejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125' />
            </svg>
          </button>
        </div>
        <div className='flex items-center gap-4px'>
          <span className='flex items-center font-bold'>닉네임</span>
          <button className='w-[20px] h-[20px]'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' className='stroke-primary'>
              <path stroke-linecap='round' stroke-linejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
            </svg>
          </button>

        </div>
      </div >
      {/* 카드영역 */}
      <div className='mt-[20px]'>
        <SubTitle text={`${userName}님의 굳이데이 카드 목록 👍🏻 (${cardCount})`} />
        <div>

        </div>
      </div>

      {/* 회원 페이지에서 카드 후기 작성 클릭하면 작성 페이지가 팝업처럼 보이기 위해 작성 페이지를 아래 하위로 위치 */}
      < Outlet />
    </>
  );
}
