import { combineReducers } from 'redux';
import booksReducer from './reducerBooks';
import ActiveBook from "./reducerActiveBook";

const rootReducer = combineReducers({
  bookspene: booksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
