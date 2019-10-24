import { FACTS } from "../types";

const fact = (factState = "", action) => {
  switch (action.type) {
    case FACTS.SET_FACT:
      return action.payload.text;
    case FACTS.SET_UPLOAD_ERROR:
      return action.payload.error.toString();
    default:
      return factState;
  }
};

export default fact;
