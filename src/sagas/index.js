import { all } from "redux-saga/effects";

import userSaga from "./userSaga";
import registerSaga from "./registerSaga";
import createMovieSaga from "./creatMovieSaga";
import fetchGenreTypesSaga from "./fetchGenreTypesSaga";
import fetchMoviesSaga from "./fetchMoviesSaga";
import fetchSingleMovieSaga from "./fetchSingleMovie";

export default function* rootSaga() {
  yield all([
    userSaga(),
    registerSaga(),
    createMovieSaga(),
    fetchGenreTypesSaga(),
    fetchMoviesSaga(),
    fetchSingleMovieSaga()
  ]);
}
