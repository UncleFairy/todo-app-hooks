import {TODOS} from "../todo/types";

export const addFilter = filter => ({
    type: TODOS.ADD_FILTER,
    payload: {
        filter
    }
});

