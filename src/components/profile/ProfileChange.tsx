import { useState } from 'react';
import { useUserStore } from '../../stores/store';
import type { UserState } from '../../types/staticType';
import PopupLayout from '../posts/PopupLayout'
import NameChangeInput from './NameChangeInput'
import PhotoChangeInput from './PhotoChangeInput'

export default function ProfileChange() {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const { displayName, photo } = useUserStore<UserState>((state) => ({
        displayName: state.displayName,
        uid: state.uid,
        photo: state.photo,
        setUser: state.setUser,
    }));


    const handlePopupOpen = () => {
        setIsPopupOpen(true)
    };


    const defaultUserImage = 'src/assets/images/user.svg';

    return (
        <div>
            {/* 보이는 영역 */}
            <div>

                <div className='flex gap-[20px] p-[20px] border-b-2 border-solid border-b-gray'>
                    <div className='flex relative'>
                        <button className='' onClick={handlePopupOpen}>
                            <img src={photo ? photo : defaultUserImage} alt='프로필이미지' className='w-[40px] h-[40px] rounded-full object-cover' />
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' className='w-[20px] h-[20px] absolute bottom-[0px] right-[-10px] fill-primary stroke-white'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125' />
                            </svg>
                        </button>
                    </div>
                    <div className='flex items-center gap-6px'>
                        <span className='flex items-center font-bold text-black'>{displayName}</span>

                        <button className='w-[20px] h-[20px]' onClick={handlePopupOpen}>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' className='stroke-primary'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
                            </svg>
                        </button>
                    </div>
                </div >
            </div>
            {/* --보이는영역 */}
            {/* 팝업 영역 */}
            {isPopupOpen && (
                <PopupLayout closeNavigate='/'>
                    <NameChangeInput />
                    <PhotoChangeInput />
                </PopupLayout>
            )}
        </div>
    );
}
