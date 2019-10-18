import { TODOS } from "../../todo/types";
import {FILTERS} from "../types";

const filter = (state = FILTERS.ALL, { type, payload }) => {
  switch (type) {
    case TODOS.ADD_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default filter;
