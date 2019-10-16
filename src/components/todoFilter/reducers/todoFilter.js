import { TODOS } from "../../todo/types";

const filter = (state = "all", { type, payload }) => {
  switch (type) {
    case TODOS.ADD_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default filter;
