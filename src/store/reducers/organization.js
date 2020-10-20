import { CREATE_ORGANIZATION } from "../types";

const initialState = {
  organizations: [],
};

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORGANIZATION:
      return {
        ...state,
        organizations: action.payload,
      };

    default:
      return state;
  }
};
