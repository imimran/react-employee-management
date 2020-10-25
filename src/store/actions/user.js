import {
  ADD_USER,
  LIST_USERS,
  SET_USER,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../types";

import axios from "axios";

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/api/user/signup")
      .then((response) => {
        console.log(response);
        dispatch({
          type: LIST_USERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setUser = (userId) => {
  return {
    type: SET_USER,
    payload: userId,
  };
};

export const addUser = (userObj) => {
  return (dispatch) => {
    axios
      .post("http://localhost:4000/api/user/signup", userObj)
      .then((response) => {
        dispatch({
          type: ADD_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:4000/api/auth/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
