import { useState } from 'react';
import { useUserStore } from '../../stores/store';
import { handleUpdateName } from '../../fetch/update';
import type { UserState } from '../../types/staticType';

export default function NameChangeInput() {
    const [isInputOpen, setIsInputOpen] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>('');

    const { uid, displayName, setUser, photo } = useUserStore<UserState>((state: UserState) => ({
        displayName: state.displayName,
        uid: state.uid,
        photo: state.photo,
        setUser: state.setUser,
    }));

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    };

    const handleNameChangeButton = () => {
        if (uid) {
            handleUpdateName({ uid, newName })
            setUser(newName, uid, photo)
            sessionStorage.setItem('name', newName)
            setIsInputOpen((prev) => !prev)
        }
    }



    return (
        <div className='flex items-center gap-6px'>
            <span className='flex items-center font-bold'>{displayName}</span>
            <div className={`group max-w-sm space-y-[12px] border-b border-solid border-primary ${!isInputOpen && "hidden"}`}>
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={newName}
                    className="py-[8px] px-[16px] w-[240px] rounded-lg text-sm 
                        focus:outline-none focus:ring-1 focus:ring-primary group-focus:border-transparent"
                    placeholder="새 닉네임을 2글자 이상 입력하세요"
                />
            </div>
            <button className='w-[20px] h-[20px]' onClick={handleNameChangeButton}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' className='stroke-primary'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
                </svg>
            </button>
        </div>
    );
}
