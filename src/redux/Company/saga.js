import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { GET_COMPANY_DATA } from "../../constants/actions";
import { getCompanyDataSuccess } from "../actions";
import { getCompany as getCompanyServices } from "../../services/company";

function* getCompanyData() {
  try {
    const response = yield call(getCompanyServices);

    yield put(getCompanyDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetCompanyData() {
  yield takeLatest(GET_COMPANY_DATA, getCompanyData);
}

export default function* rootSaga() {
  yield all([fork(watchGetCompanyData)]);
}
