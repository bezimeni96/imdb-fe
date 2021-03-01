import { takeLatest, take, put, call } from "redux-saga/effects";

import { FETCH_MOVIES_REQUEST } from "../redux/movie/movieTypes";
import { fetchMovies } from "../api/index";
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "../redux/movie/movieActions";

function* handlefetchMoviesSaga() {
  try {
    const movies = yield call(fetchMovies);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

// watcher saga
function* watchMoviesFetch() {
  yield takeLatest(FETCH_MOVIES_REQUEST, handlefetchMoviesSaga);
}

export default watchMoviesFetch;
