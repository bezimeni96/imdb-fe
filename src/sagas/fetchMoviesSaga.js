import { takeLatest, take, put, call } from "redux-saga/effects";

import { FETCH_MOVIES_REQUEST } from "../redux/movie/movieTypes";
import { fetchMovies } from "../api/index";
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "../redux/movie/movieActions";

function* handlefetchMoviesSaga(action) {
  try {
    const response = action.payload ? yield call(fetchMovies, action.payload) : yield call(fetchMovies);
    yield put(fetchMoviesSuccess(response));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

// watcher saga
function* watchMoviesFetch() {
  yield takeLatest(FETCH_MOVIES_REQUEST, handlefetchMoviesSaga);
}

export default watchMoviesFetch;
