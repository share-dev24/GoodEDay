import { useState, useCallback } from 'react';
import { useUserStore } from '../../stores/store';
import type { UserState } from '../../types/staticType';
import { handleFileChange } from '../../fetch/update';

export default function PhotoChangeInput() {
    const { displayName, uid, photo, setUser } = useUserStore<UserState>((state) => ({
        displayName: state.displayName,
        uid: state.uid,
        photo: state.photo,
        setUser: state.setUser,
    }));
    const defaultUserImage = 'src/assets/images/user.svg';

    const [selectedImage, setSelectedImage] = useState<string>();
    const [file, setFile] = useState<Blob>();
    console.log('선택이미지', selectedImage)

    const handleFileShow = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setFile(file)
        }
    }, [file])


    const handleFileUpdate = async () => {
        if (file && uid) {
            const fileURL = await handleFileChange({ file, uid });
            if (fileURL) {
                setUser(displayName, uid, fileURL);
            } else {
                console.log('파일업로드 실패')
            }
        }
    };



    const handleChooseImage = () => {
        const input = document.getElementById('file-input');
        if (input) {
            input.click();
        }

    };

    return (
        <div>
            <button onClick={handleChooseImage} className='flex justify-between items-center gap-4px'>
                <div>
                    <img src={photo ? photo : defaultUserImage} alt='프로필이미지' className='w-[40px] h-[40px] rounded-full object-cover' />
                </div>
                <div className='group flex gap-4px items-center border border-primary border-solid p-4px rounded-lg hover:text-white hover:bg-primary'>
                    <span className='text-[12px] group-hover:text-white text-primary'>파일선택</span>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' className='stroke-primary w-[20px] h-[20px] group-hover:stroke-white'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10' />
                    </svg>
                </div>

            </button>
            <input id='file-input' type='file' accept='image/*' className='hidden' onChange={handleFileShow} />
            {selectedImage && (
                <div className='flex gap-4px flex-col mt-4px'>
                    <img src={selectedImage} alt='업로드된 사진' className='w-[340px] h-[340px] object-cover' />
                    <div className='w-full flex gap-8px'>
                        <button className='text-sm w-full  text-primary border border-primary rounded-lg p-4px hover:text-white hover:bg-primary' onClick={handleChooseImage}>다시 선택하기</button>
                        <button className='text-sm w-full text-primary border border-primary rounded-lg p-4px hover:text-white hover:bg-primary' onClick={handleFileUpdate}>바꾸기</button>
                    </div>
                </div>
            )}
        </div>
    );
}
