import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const reducers = combineReducers({
  books: bookReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
