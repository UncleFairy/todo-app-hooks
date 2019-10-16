import { combineReducers } from "redux";
import todoReducer from "./components/todo/reducers/todo";
import filterReducer from "./components/todoFilter/reducers/todoFilter";

export default combineReducers({
  todos: todoReducer,
  filter: filterReducer
});
