import {TODOS} from "../todo/types";

export const addTodo = inputValue => ({
    type: TODOS.ADD_TODO,
    payload: {
        inputValue
    }
});
