import { ActionType } from "../action-types";
import { IAction, IContextState } from "../actions";

const initialState = {
  isModalVisible: false,
  type: "",
  length: 6,
  book_list: [
    { id: 1, Name: "Champak", Price: 200, Category: "Kids" },
    {
      id: 2,
      Name: "Reader's Digest",
      Price: 400,
      Category: "Kids",
    },
    { id: 3, Name: "Nancy Drew", Price: 1000, Category: "Horrow" },
    { id: 4, Name: "Tomorrow Ends", Price: 2000, Category: "Fiction" },
    { id: 5, Name: "It is Love", Price: 800, Category: "Romance" },
    { id: 6, Name: "Never Love", Price: 500, Category: "Romance" },
  ],
};

const reducer = (state: IContextState = initialState, action: IAction) => {
  switch (action.type) {
    case ActionType.ADD_BOOK:
      return {
        ...state,
        length: state.book_list.length + 1,
        book_list: [...state.book_list, action.payload],
      };
    case ActionType.DELETE_BOOK:
      return {
        ...state,
        book_list: state.book_list.filter((ele) => {
          if (ele.id !== Number(action.payload)) return ele;
        }),
      };
    case ActionType.UPDATE_BOOK:
      return { ...state.book_list };
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        isModalVisible: action.payload,
      };
    case ActionType.UPDATE_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
