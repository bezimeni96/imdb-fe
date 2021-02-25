import { takeLatest, takeEvery, put, call } from "redux-saga/effects";

import { CREATE_MOVIE_REQUEST } from "../redux/movie/movieTypes";
import { createMovie } from "../api/index";
import {
  createMovieSuccess,
  createMovieFailure,
} from "../redux/movie/movieActions";

function* handleCreateMovieSaga(action) {
  try {
    const movie = yield call(createMovie, action.payload);
    yield put(createMovieSuccess(movie));
  } catch (error) {
    yield put(createMovieFailure(error));
  }
}

// watcher saga
function* watchCreateMovie() {
  yield takeLatest(CREATE_MOVIE_REQUEST, handleCreateMovieSaga);
}

export default watchCreateMovie;
