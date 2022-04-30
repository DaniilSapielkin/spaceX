import { all } from "redux-saga/effects";
import company from "./Company/saga";

export default function* rootSaga() {
  yield all([company()]);
}
