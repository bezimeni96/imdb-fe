import { takeLatest, take, put, call } from "redux-saga/effects";

import { FETCH_SINGLE_MOVIE_REQUEST } from "../redux/movie/movieTypes";
import { fetchSingleMovie } from "../api/index";
import {
  fetchSingleMovieSuccess,
  fetchSingleMovieFailure,
} from "../redux/movie/movieActions";

function* handleFetchSingleMovieSaga(action) {
  try {
    const response = yield call(fetchSingleMovie, action.payload);
    yield put(fetchSingleMovieSuccess(response));
  } catch (error) {
    yield put(fetchSingleMovieFailure(error));
  }
}

// watcher saga
function* watchMoviesFetch() {
  yield takeLatest(FETCH_SINGLE_MOVIE_REQUEST, handleFetchSingleMovieSaga);
}

export default watchMoviesFetch;
