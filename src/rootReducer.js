import { combineReducers } from "redux";
import todoReducer from "./components/todo/reducers/todo";

export default combineReducers({
  todos: todoReducer,
});
