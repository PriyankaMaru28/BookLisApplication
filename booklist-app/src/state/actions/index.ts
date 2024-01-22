export interface IBookList {
  id: number;
  Name: String;
  Price: number;
  Category: String;
}

interface IContextState {
  type: String;
  isModalVisible: boolean;
  length: number;
  book_list: IBookList[];
}

interface IContextAction {
  type: String;
  payload: IBookList;
}

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
