import { ADD_USER, LIST_USERS, SET_USER, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../types";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_USERS :
      return { 
        ...state, 
        users: action.payload 
      };
    case SET_USER:
      return { ...state,
        userId: action.payload
       };
    case ADD_USER:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        ...state,
        users: action.payload,
      };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: true, userId: action.payload };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    case USER_LOGOUT:
    default:
      return state;
  }
};



