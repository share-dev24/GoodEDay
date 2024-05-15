import { Timestamp } from "firebase/firestore";

export default function getTimeSimple(firebaseTime: Timestamp) {
    const time = firebaseTime.toDate();
    const day = time.getDate().toString().padStart(2, '0');
    const month = (time.getMonth() + 1).toString().padStart(2, '0');
    const year = time.getFullYear().toString().slice(-2);

    const simpleTime = `${year}.${month}.${day}`;

    return simpleTime;
}
