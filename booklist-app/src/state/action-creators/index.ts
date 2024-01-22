import { Dispatch } from "redux";

import { ActionType } from "../action-types/index";
import { IAction, IBookList } from "../actions";

export const addBook = (newbook: IBookList) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADD_BOOK,
      payload: newbook,
    });
  };
};

export const deleteBook = (deleteBook: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.DELETE_BOOK,
      payload: deleteBook,
    });
  };
};

export const updateBook = (updatenewbook: IBookList) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.UPDATE_BOOK,
      payload: updatenewbook,
    });
  };
};

export const isModalVisible = (isVisible: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SHOW_MODAL,
      payload: isVisible,
    });
  };
};

export const updateType = (type: String) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.UPDATE_TYPE,
      payload: type,
    });
  };
};
