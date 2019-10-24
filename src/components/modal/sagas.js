import { call, put, takeEvery, all } from "redux-saga/effects";
import { FACTS } from "./types";
import api from "../../api";
import { setFact, setUploadError } from "./actions";

export function* fetchFact() {
  try {
    const payload = yield call(api.facts.getFact);
    yield put(setFact(payload.data));
  } catch (error) {
    yield put(setUploadError(error));
  }
}

export function* watchSetFact() {
  yield takeEvery(FACTS.FETCH_FACT, fetchFact);
}

export default function* rootSaga() {
  yield all([watchSetFact()]);
}
