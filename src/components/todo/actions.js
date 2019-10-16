import { TODOS } from "./types";

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

export const removeTodo = todoId => ({
  type: TODOS.REMOVE_TODO,
  payload: {
    todoId
  }
});

export const clearCompleted = () => ({
  type: TODOS.CLEAR_COMPLETED
});
