import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./user/userTypes";

import {
  CREATE_MOVIE_REQUEST,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
} from "./movie/movieTypes";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_FAILURE:
    case REGISTER_USER_FAILURE:
    case CREATE_MOVIE_FAILURE:
      return action.payload;
    case FETCH_USER_REQUEST:
    case FETCH_USER_SUCCESS:
    case REGISTER_USER_REQUEST:
    case REGISTER_USER_SUCCESS:
    case CREATE_MOVIE_REQUEST:
    case CREATE_MOVIE_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
