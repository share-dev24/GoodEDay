import type { Timestamp } from 'firebase/firestore';

export interface IPostCards {
    postId: string,
    address: string,
    content: string,
    name: string,
    image: string,
    likeCount: number,
    likeUserList: string[],
    randomTodo: string,
    recommendation: boolean,
    theme: 'event' | 'cafe' | 'restaurant' | 'spot';
    uid: string,
    writeDate: Timestamp
}


export interface IUpdateHeartProps {
    uid: string,
    postId: string,
    isLike: boolean
}

export interface ILikeState {
    origin: boolean;
    change: boolean;
}