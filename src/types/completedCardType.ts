import { IPlaceInfo } from './createCardType';

export interface ICompletedCardBtnProps {
  selectPlace: IPlaceInfo;
  cardName: string;
  numbers: string;
  randomTodo: { todo: string; desc: string } | undefined;
  range: string;
  theme: string | undefined;
}
