import { takeLatest, takeEvery, put, call } from "redux-saga/effects";

import { FETCH_USER_REQUEST } from "../redux/user/userTypes";
import { fetchUser } from "../api/index";
import { fetchUserSuccess, fetchUserFailure } from "../redux/user/userActions";

function* handleFetchUserSaga(action) {
  try {
    const user = yield call(fetchUser, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

// watcher saga
function* watchUserFetch() {
  yield takeLatest(FETCH_USER_REQUEST, handleFetchUserSaga);
}

export default watchUserFetch;
