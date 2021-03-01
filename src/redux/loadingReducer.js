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

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
    case REGISTER_USER_REQUEST:
    case CREATE_MOVIE_REQUEST:
      return true;
    case FETCH_USER_SUCCESS:
      return "login success";
    case REGISTER_USER_SUCCESS:
      return "register success";
    case CREATE_MOVIE_SUCCESS:
      return "created success"
    case FETCH_USER_FAILURE:
    case REGISTER_USER_FAILURE:
    case CREATE_MOVIE_FAILURE:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
