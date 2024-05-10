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
}

interface todoData {
  todo: string;
  desc: string;
}
