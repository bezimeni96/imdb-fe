import { CREATE_MOVIE_SUCCESS } from "./movieTypes";

const movieReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_MOVIE_SUCCESS: {
      return {
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
