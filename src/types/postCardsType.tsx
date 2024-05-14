import type { Timestamp } from "firebase/firestore";

export interface IPostCards {
    address: string,
    content: string,
    name: string,
    image: string,
    likeCount: number,
    likeUserList: string[],
    randomTodo: string,
    recommendation: boolean,
    theme: "event" | "cafe" | "restaurant" | "spot";
    uid: string,
    writeDate: Timestamp
}