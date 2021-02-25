import {
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
  FETCH_GENRE_REQUEST,
  FETCH_GENRE_SUCCESS,
  FETCH_GENRE_FAILURE,
} from "./movieTypes";

export const createMovieRequest = () => {
  return {
    type: CREATE_MOVIE_REQUEST,
  };
};

export const createMovieSuccess = (movie) => {
  return {
    type: CREATE_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const createMovieFailure = (error) => {
  return {
    type: CREATE_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchGenreTypesRequest = () => {
  return {
    type: FETCH_GENRE_REQUEST,
  }
}

export const fetchGenreTypesSuccess = (genres) => {
  return {
    type: FETCH_GENRE_SUCCESS,
    payload: genres,
  };
};

export const fetchGenreTypesFailure = (error) => {
  return {
    type: FETCH_GENRE_FAILURE,
    payload: error,
  };
};