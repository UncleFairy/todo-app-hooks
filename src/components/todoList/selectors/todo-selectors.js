import Todo from "../../todo/todo";
import React from "react";

const getTodos = state => state.todos;

export const filterByIsCompletedStatus = (state, status) => {
  const todos = getTodos(state);
  return todos
    .filter(todo => todo.isCompleted === status)
    .map(todo => (
      <Todo id={todo.id} text={todo.text} isCompleted={todo.isCompleted} />
    ));
};
