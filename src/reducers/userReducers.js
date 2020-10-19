import { FETCH_USER_LOGIN, FETCH_USER_LOGOUT } from "../types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        username: action.payload.username,
      };
    case FETCH_USER_LOGOUT:
        return {
            ...state,
            userId : action.payload.userId
        }
    default:
        return state      
  }
};
