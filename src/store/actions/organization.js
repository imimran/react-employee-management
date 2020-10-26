import axios from "axios";
import { CREATE_ORGANIZATION_SUCCESS } from "../types";

export const createOrganization = () => {
  return (dispatch, getState) => {
    axios
      .post("https://localhost:4000/api/company", tokenConfig(getState))
      .then((response) => {
        dispatch({
          type: CREATE_ORGANIZATION_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const tokenConfig = getState =>{
  //get token from localstroge
  const token = getState().auth.token;
  //headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  //if token add to headers
  if (token) {
    config.headers["auth-token"] = token;
  }
  return config
}