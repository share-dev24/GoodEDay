// import styled from 'styled-components';
import { useState } from 'react';
import HeartIcon from './HeartIcon';

interface PostCardProps {
    userId: string;
    reviewDate: string;
    theme: string;
    imageUrl?: string;
    content: string;
}


export default function PostCard({ imageUrl = '/src/assets/images/a.jpg', userId = '호랑이', reviewDate = '24.05.02', theme = '관광명소', content = '예쁜 공원에서 책도 읽고 낮잠잤어요!굳이데이 덕분에 좋은 시간 보냅니당' }: PostCardProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='flex flex-col w-[167px] h-[270px] text-ellipsis overflow-hidden'>
            <div className='relative'>
                <img src={imageUrl} alt='후기' className='w-full h-[167px] rounded-[8px] object-cover' />
                <button
                    className='absolute top-[140px] right-[8px]'
                    onClick={() => setIsLiked((prev) => !prev)}
                >
                    <HeartIcon isLike={isLiked} />
                </button>
            </div>
            <div className='flex justify-between p-2px pt-4px'>
                <span className='font-bold'>{userId}</span>
                <span className='font-light text-sm flex items-center tracking-tight'>{reviewDate}</span>
            </div>
            <div className='py-4px'>
                <span className='font-semibold inline-block'>{`[${theme}]`}</span>
                <span className='text-sm'>&nbsp;{content}</span>
            </div>

        </div>
    );
}
