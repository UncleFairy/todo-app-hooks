import { combineReducers } from "redux";
import todoReducer from "./todo.js";

export default combineReducers({
  todos: todoReducer
});
