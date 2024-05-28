// interface search -> 'page' - 'data type'으로 검색

// main page - banner interface
export interface IbannerData {
  title: string;
  text: string;
}

// main page - theme card interface
export interface IthemeCardData {
  theme: string;
  title: string;
  imageURL: string;
  season: boolean;
}

// completed card page - randomTodo interface
export interface IrandomTodoData {
  cafe: todoData[];
  restaurant: todoData[];
  event: todoData[];
  spot: todoData[];
}

export interface todoData {
  todo: string;
  desc: string;
}

export interface IHandleUpdateName {
  uid: string;
  newName: string;
}

export interface IHandleUpdateFile {
  file: Blob;
  uid: string;
}

// zustand
export interface UserState {
  displayName: string | null;
  uid: string | null;
  photo: string | null;
  setUser: (
    displayName: string | null,
    uid: string | null,
    photo: string | null
  ) => void;
}

export interface LikeCardsListState {
  cardsList: string[];
  setCardsList: (cardsList: string[]) => void;
}
