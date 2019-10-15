import {TODOS} from "./types";

export const completeTodo = id => ({
  type: TODOS.COMPLETE_TODO,
  payload: {
    id
  }
});

export const uncompleteTodo = id => ({
  type: TODOS.UNCOMPLETED_TODO,
  payload: {
    id
  }
});
