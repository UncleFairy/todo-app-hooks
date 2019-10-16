import { TODOS } from "../types";
import uuid from "uuid";

const toggleCompleteState = (todos, { id: payloadID }, isComplete) =>
  todos.map(todo => ({
    ...todo,
    isCompleted: todo.id === payloadID ? isComplete : todo.isCompleted
  }));

const todos = (todosState = [], { type, payload }) => {
  switch (type) {
    case TODOS.ADD_TODO:
      return [
        {
          id: uuid(),
          text: payload.inputValue,
          isCompleted: false
        },
        ...todosState
      ];

    case TODOS.COMPLETE_TODO:
      return toggleCompleteState(todosState, payload, true);

    case TODOS.UNCOMPLETED_TODO:
      return toggleCompleteState(todosState, payload, false);

    case TODOS.REMOVE_TODO:
      return todosState.filter(todo => todo.id !== payload.todoId);

      case TODOS.CLEAR_COMPLETED:
      return todosState.filter(todo => todo.isCompleted !== true);

    default:
      return todosState;
  }
};

export default todos;
