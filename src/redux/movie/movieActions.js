import {
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
  FETCH_GENRE_REQUEST,
  FETCH_GENRE_SUCCESS,
  FETCH_GENRE_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_SINGLE_MOVIE_REQUEST,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_SINGLE_MOVIE_FAILURE,
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

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  }
}

export const fetchMoviesSuccess = (payload) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: payload,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchSingleMovieRequest = () => {
  return {
    type: FETCH_SINGLE_MOVIE_REQUEST,
  }
}

export const fetchSingleMovieSuccess = (movie) => {
  return {
    type: FETCH_SINGLE_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const fetchSingleMovieFailure = (error) => {
  return {
    type: FETCH_SINGLE_MOVIE_FAILURE,
    payload: error,
  };
};