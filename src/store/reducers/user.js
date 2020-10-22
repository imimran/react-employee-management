import { ADD_USER, LIST_USERS, SET_USER } from "../types";

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

export default userReducer;

