import {
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
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
