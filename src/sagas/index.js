import { all } from 'redux-saga/effects';

import userSaga from "./userSaga";
import registerSaga from './registerSaga'

export default function* rootSaga() {
  yield all([userSaga(), registerSaga()]);
}
