// import axios from "axios";
// import {returnErrors} from '../actions/error'
// import {
//   USER_LOADING,
//   USER_LOADED,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
//   LOGOUT_SUCCESS,
// } from "../types";
//  export const loadUser = () => (dispatch, getState) =>{
// //     //user loading
// //     dispatch({ type: USER_LOADING })
   

// //     axios.get("http://localhost:4000/api/user", tokenConfig(getState))
// //      .then( res => dispatch({
// //          type: USER_LOADED,
// //          payload: res.data
// //      }))
// //      .catch(err => {
// //          dispatch(returnErrors(err.response.data, err.response.status))
// //             dispatch({
// //                 type: AUTH_ERROR
// //             }) 
// //         })
//  }

// export const tokenConfig = getState =>{
//   //get token from localstroge
//   const token = getState().auth.token;
//   //headers
//   const config = {
//     headers: {
//       "Content-type": "application/json",
//     },
//   };
//   //if token add to headers
//   if (token) {
//     config.headers["auth-token"] = token;
//   }
//   return config
// }