import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from './HeartIcon';
import { Timestamp } from 'firebase/firestore';
import getThemeKR from '../../modules/ThemeNameCompiling';
import getTimeSimple from '../../modules/TimeCompiler';

interface PostCardProps {
    postId: string,
    uid: string;
    userName: string;
    reviewDate: Timestamp;
    theme: string;
    imageUrl?: string;
    content: string;
}


export default function PostCard({ imageUrl, userName, reviewDate, theme, content, uid }: PostCardProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <Link to={`posts/${uid}`} >

            <div className='flex flex-col w-[167px] h-[274px] text-ellipsis overflow-hidden'>
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
                    <span className='font-bold'>{userName}</span>
                    <span className='font-light text-sm flex items-center tracking-tight'>{getTimeSimple(reviewDate)}</span>
                </div>
                <div className='py-4px'>
                    <span className='font-semibold inline-block'>{`[${getThemeKR(theme)}]`}</span>
                    <span className='text-sm'>&nbsp;{content}</span>
                </div>

            </div>
        </Link>
    );
}
