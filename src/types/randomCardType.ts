import { Timestamp } from 'firebase/firestore';

export interface IRandomCardType {
  cardId: string;
  cardTitle: string;
  theme: 'cafe' | 'restaurant' | 'event' | 'spot';
  randomTodo: string;
  uid: string;
  name: string;
  scope: number;
  people: number;
  address: string;
  reviewCheck: boolean;
  createdTime: Timestamp;
}
