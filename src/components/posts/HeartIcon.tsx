import { useState, useCallback, useEffect } from "react";
import type { IUpdateHeartProps } from "../../types/postCardsType";
import { updateLikeState } from "../../fetch/update";
import { useUserStore } from "../../stores/store";

interface IHeartIcon {
    likeCounter?: number;
    postId: string;
    state: boolean;
}

export default function HeartIcon({ likeCounter, state, postId }: IHeartIcon) {
    const [isLiked, setIsLiked] = useState(state);
    const [likeCount, setLikeCount] = useState(likeCounter);
    const { uid } = useUserStore();

    const handleLike = useCallback(() => {
        if (!uid) return;
        const newLikeState = !isLiked;
        setIsLiked(newLikeState);
        if (likeCount !== undefined) { setLikeCount((prevCount) => Number(prevCount) + (newLikeState ? 1 : -1)); }
        updateLikeState({ uid, postId, isLike: newLikeState } as IUpdateHeartProps);
    }, [isLiked, likeCount, uid, postId]);

    useEffect(() => {
        setIsLiked(state)
    }, [state])

    return (
        <button onClick={handleLike} className='inline'>
            <div className='flex items-center gap-4px'>
                {likeCounter !== undefined && likeCounter !== null && (
                    <span className='tracking-tighter'> 좋아요 {likeCount}개</span>
                )}
                <span className='w-[24px] h-[24px]'>
                    {isLiked ? (
                        <svg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 24 24'>
                            <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
                        </svg>
                    ) : (
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='white' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z' />
                        </svg>
                    )}
                </span>
            </div>
        </button>
    );
}
