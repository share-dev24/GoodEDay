import { useState } from 'react';

interface IFilteringButton {
    onPopularClick: () => void;
    onRealtimeClick: () => void;
}
type FilteringType = 'writeDate' | 'likeCount'
export default function FilteringButton({ onPopularClick, onRealtimeClick }: IFilteringButton) {
    const [activeButton, setActiveButton] = useState<FilteringType>('writeDate');

    const handleRealtimeClick = () => {
        setActiveButton('writeDate');
        onRealtimeClick();
    };

    const handlePopularClick = () => {
        setActiveButton('likeCount');
        onPopularClick();
    };

    return (
        <div className='flex gap-6px px-[20px]'>
            <button
                onClick={handleRealtimeClick}
                className={activeButton === 'writeDate'
                    ? 'w-sm px-8px flex justify-center items-center text-sm text-white font-semibold bg-gradient-to-r from-secondary to-primary rounded-2xl transition duration-150 ease-in-out hover:text-white'
                    : 'w-sm p-2px flex justify-center items-center text-sm text-transparent font-semibold bg-gradient-to-r from-secondary to-primary rounded-2xl'
                }
            >
                {activeButton === 'writeDate' ? '실시간 순' : (
                    <div className='w-sm p-4px bg-white rounded-2xl'>
                        <span className='bg-clip-text bg-gradient-to-r from-secondary to-primary'>
                            실시간 순
                        </span>
                    </div>
                )}
            </button>
            <button
                onClick={handlePopularClick}
                className={activeButton === 'likeCount'
                    ? 'w-sm px-8px flex justify-center items-center text-sm text-white font-semibold bg-gradient-to-r from-secondary to-primary rounded-2xl transition duration-150 ease-in-out hover:text-white'
                    : 'w-sm p-2px flex justify-center items-center text-sm text-transparent font-semibold bg-gradient-to-r from-secondary to-primary rounded-2xl'
                }
            >
                {activeButton === 'likeCount' ? '좋아요 순' : (
                    <div className='w-sm p-4px bg-white rounded-2xl'>
                        <span className='bg-clip-text bg-gradient-to-r from-secondary to-primary'>
                            좋아요 순
                        </span>
                    </div>
                )}
            </button>
        </div>
    );
}
