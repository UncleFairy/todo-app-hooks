import { FACTS } from "../modal/types";

export const fetchFact = () => ({
  type: FACTS.FETCH_FACT,
});

export const setFact = (fact = {text: ""}) => ({
  type: FACTS.SET_FACT,
  payload: fact
});

export const setUploadError = error => ({
  type: FACTS.SET_UPLOAD_ERROR,
  payload: {
    error: error
  }
});
