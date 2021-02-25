import { all } from 'redux-saga/effects';

import userSaga from "./userSaga";
import registerSaga from './registerSaga'
import createMovieSaga from "./creatMovieSaga";

export default function* rootSaga() {
  yield all([userSaga(), registerSaga(), createMovieSaga()]);
}
