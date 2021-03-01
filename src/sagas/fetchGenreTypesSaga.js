import { takeLatest, take, put, call } from "redux-saga/effects";

import { FETCH_GENRE_REQUEST } from "../redux/movie/movieTypes";
import { fetchGenreTypes } from "../api/index";
import {
  fetchGenreTypesSuccess,
  fetchGenreTypesFailure,
} from "../redux/movie/movieActions";

function* handleFetchGenreTypesSaga() {
  try {
    const genres = yield call(fetchGenreTypes);
    yield put(fetchGenreTypesSuccess(genres));
  } catch (error) {
    yield put(fetchGenreTypesFailure(error));
  }
}

// watcher saga
function* watchGenreFetch() {
  yield takeLatest(FETCH_GENRE_REQUEST, handleFetchGenreTypesSaga);
}

export default watchGenreFetch;
