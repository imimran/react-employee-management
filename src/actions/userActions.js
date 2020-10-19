import {FETCH_USER_LOGIN, FETCH_USER_LOGOUT} from "../types"

export const userLogin = (username) => {
    return {
        type: FETCH_USER_LOGIN,
        payload:{
            username
        }
    }
}

export const userLogout = (userId) => {
  return {
    type: FETCH_USER_LOGOUT,
    payload: {
      userId,
    },
  };
};