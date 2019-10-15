import {TODOS} from "../types";
import uuid from 'uuid'

const toggleCompleteState = (todos, { id: payloadID }, isComplete) => todos.map(todo => ({
  ...todo,
  isCompleted: todo.id === payloadID ? isComplete : todo.isCompleted
}))

const todos = (todosState = [], { type, payload }) => {
  switch (type) {
    case TODOS.ADD_TODO:
      return [...todosState, {
        id: uuid(),
        text: payload.inputValue,
        isCompleted: false
      }];

    case TODOS.COMPLETE_TODO:
      return toggleCompleteState(todosState, payload, true);

    case TODOS.UNCOMPLETED_TODO:
      return toggleCompleteState(todosState, payload, false);

    default:
      return todosState;
  }
};

export default todos;
