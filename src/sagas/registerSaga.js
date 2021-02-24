import { takeLatest, takeEvery, put, call } from "redux-saga/effects";

import { REGISTER_USER_REQUEST } from "../redux/user/userTypes";
import { registerUser } from "../api/index";
import {
  registerUserSuccess,
  registerUserFailure,
} from "../redux/user/userActions";

function* handleRegisterUserSaga(action) {
  try {
    yield call(registerUser, action.payload);
    yield put(registerUserSuccess());
  } catch (error) {
    yield put(registerUserFailure(error));
  }
}

// watcher saga
function* watchUserFetch() {
  yield takeLatest(REGISTER_USER_REQUEST, handleRegisterUserSaga);
}

export default watchUserFetch;
