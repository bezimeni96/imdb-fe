import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import myReducer from '../store/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  proba: null,
});

export default rootReducer;