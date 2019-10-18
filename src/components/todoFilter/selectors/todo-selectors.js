import { createSelector } from "reselect";

const getTodos = state => state.todos;

export const getCounter = createSelector(
  getTodos,
  todos => todos.filter(todo => !todo.isCompleted).length
);
export const getTodoCount = createSelector(
  getTodos,
  todos => todos.length
);
