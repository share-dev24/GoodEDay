export interface IbannerData {
  title: string;
  text: string;
}

export interface IthemeCardData {
  theme: string;
  title: string;
  imageURL: string;
  season: boolean;
}

export interface IrandomTodoData {
  cafe: todoData[];
  restaurant: todoData[];
  event: todoData[];
}

interface todoData {
  todo: string;
  desc: string;
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
