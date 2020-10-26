import {
  CREATE_ORGANIZATION_REQUEST,
  CREATE_ORGANIZATION_FAIL,
  CREATE_ORGANIZATION_SUCCESS,
} from "../types";

const initialState = {
  organizations: [],
};

export const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORGANIZATION_REQUEST:
      return {
        ...state,
        loading: true,
        organizations: action.payload,
      };
    case CREATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        loading: false,
        organization: action.payload,
      };
    case CREATE_ORGANIZATION_FAIL:
      return {
        ...state,
        loading: true,
        organization: action.payload,
      };

    default:
      return state;
  }
};
