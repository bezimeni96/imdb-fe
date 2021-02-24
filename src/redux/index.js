import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
