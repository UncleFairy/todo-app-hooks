import { FILTERS } from "../../todoFilter/types";
import { createSelector } from "reselect";

const getFilter = state => state.filter;
const getTodos = state => state.todos;

export const filterByIsCompletedStatus = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case FILTERS.ACTIVE:
        return todos.filter(t => !t.isCompleted);
      case FILTERS.COMPLETED:
        return todos.filter(t => t.isCompleted);
      default:
        return todos;
    }
  }
);
