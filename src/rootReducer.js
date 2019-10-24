import { combineReducers } from "redux";
import todoReducer from "./components/todo/reducers/todo";
import filterReducer from "./components/todoFilter/reducers/todoFilter";
import factReducer from "./components/modal/reducers/modal";

export default combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  fact: factReducer
});
