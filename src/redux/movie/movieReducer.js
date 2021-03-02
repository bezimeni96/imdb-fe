import { CREATE_MOVIE_SUCCESS, FETCH_GENRE_SUCCESS, FETCH_MOVIES_SUCCESS, FETCH_SINGLE_MOVIE_SUCCESS } from "./movieTypes";

const movieReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_MOVIE_SUCCESS: {
      return {
        ...action.payload,
      };
    }
    case FETCH_GENRE_SUCCESS: {
      return {
        ...state,
        GENRE_TYPES: [...action.payload]
      }
    }
    case FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        list: [...action.payload.results],
        previous: action.payload.previous,
        next: action.payload.next,
      }
    }
    case FETCH_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        single_movie: {...action.payload}
      }

    default:
      return state;
  }
};

export default movieReducer;
