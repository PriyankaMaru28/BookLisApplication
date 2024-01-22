export interface IBookList {
  id: number;
  Name: String;
  Price: number;
  Category: String;
  Description?: String;
}

interface IContextState {
  type: String;
  isModalVisible: boolean;
  length: number;
  book_list: IBookList[];
}

export interface IContextAction {
  type: String;
  payload: IBookList;
}

// export interface IContextActionUpdate {
//   type: String;
//   payload: {
//     id: number;
//     updatedBook: IBookList;
//   };
// }

interface IContextDeleteAction {
  type: String;
  payload: number;
}

interface IContextBooleanAction {
  type: String;
  payload: boolean;
}

interface IContextBooleanAction {
  type: String;
  payload: boolean;
}

type IAction = IContextAction | IContextDeleteAction | IContextBooleanAction;

export type { IContextState, IAction };
