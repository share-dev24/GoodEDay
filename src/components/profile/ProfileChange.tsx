import { useState } from 'react';
import { useUserStore } from '../../stores/store';
import type { UserState } from '../../types/staticType';
import PopupLayout from '../posts/PopupLayout'
import PhotoChangeInput from './PhotoChangeInput'
import { handleUpdateName } from '../../fetch/update';

export default function ProfileChange() {
    const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>('');
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const { displayName, uid, photo, setUser } = useUserStore<UserState>((state) => ({
        displayName: state.displayName,
        uid: state.uid,
        photo: state.photo,
        setUser: state.setUser,
    }));
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    };

    const handleNameChangeButton = () => {
        setIsInputOpen((prev) => !prev);
        if (newName.length >= 2 && uid) {
            handleUpdateName({ uid, newName });
            setUser(newName, uid, photo);
            sessionStorage.setItem('name', newName);
        }
    };
    const handlePopupOpen = () => {
        setIsPopupOpen(true)
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const defaultUserImage = 'src/assets/images/user.svg';

    return (
        <div>
            {/* 보이는 영역 */}
            <div className='flex justify-between items-center pr-[20px] border-b-2 border-solid border-b-gray'>

                <div className='flex  gap-[20px] p-[20px] '>
                    <div className='flex relative'>
                        <button onClick={handlePopupOpen}>
                            <img src={photo ? photo : defaultUserImage} alt='프로필이미지' className='w-[40px] h-[40px] rounded-full object-cover' />
                        </button>
                    </div>
                    <div className='flex items-center gap-6px'>
                        <span className='flex items-center font-semibold text-black'>{displayName}</span>
                        <div className={`flex flex-col group max-w-sm space-y-[12px] ${!isInputOpen && 'hidden'}`}>
                            <input
                                type='text'
                                onChange={handleInputChange}
                                value={newName}
                                className='p-[8px] w-[240px] text-sm focus:outline-none border-b border-solid  border-primary'
                                placeholder='새 닉네임을 2글자 이상 입력하세요'
                            />
                        </div>
                        <button className='w-[20px] h-[20px]' onClick={handleNameChangeButton}>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' className='stroke-primary'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
                            </svg>
                        </button>
                    </div>
                </div >
                <button onClick={handlePopupOpen} className='text-[12px]  w-[100px] h-[30px]  text-primary border border-primary rounded-lg p-4px hover:text-white hover:bg-primary'>프로필사진수정</button>
            </div>
            {/* --보이는영역 */}
            {/* 팝업 영역 */}
            {isPopupOpen && (
                <PopupLayout onPopupClose={handlePopupClose}>
                    <PhotoChangeInput />
                </PopupLayout>
            )}
        </div>
    );
}
