import { FETCH_USER_SUCCESS } from "./userTypes";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return {
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
