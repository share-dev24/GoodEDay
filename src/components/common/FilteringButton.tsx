
interface IFilteringButton {
    onPopularClick: () => void;
    onRealtimeClick: () => void;
}

export default function FilteringButton({ onPopularClick, onRealtimeClick }: IFilteringButton) {

    return (
        <div className='flex gap-4px'>

            <button
                onClick={onRealtimeClick}
                className='w-sm p-4px flex justify-center items-center text-sm text-white font-semibold bg-gradient-to-r from-secondary to-primary rounded-2xl transition duration-150 ease-in-out hover:text-white'
            >
                실시간 순
            </button>
            <button
                onClick={onPopularClick}
                className='w-sm p-2px flex justify-center items-center text-sm text-transparent font-semibold bg-gradient-to-r from-secondary to-primary rounded-2xl'
            >
                <div className='w-sm p-4px bg-white rounded-2xl'>
                    <span className='bg-clip-text bg-gradient-to-r from-secondary to-primary'>
                        좋아요 순
                    </span>
                </div>
            </button>
        </div>
    )
}