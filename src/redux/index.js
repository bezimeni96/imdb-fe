import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import movieReducer from "./movie/movieReducer";

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  loading: loadingReducer,
  movie: movieReducer,
});

export default rootReducer;
