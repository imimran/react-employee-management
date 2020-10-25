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

// const initialState = {
//   token: localStorage.getItem("token"),
//   isAuth: null,
//   isloading: false,
//   user: null,
// };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case USER_LOADING:
//       return {
//         ...state,
//         isloading: true,
//       };
//     case USER_LOADED:
//       return {
//         ...state,
//         isloading: false,
//         isAuth: true,
//         user: action.payload,
//       };

//     case LOGIN_SUCCESS:
//     case REGISTER_SUCCESS:
//         localStorage.setItem('token', action.payload.token)
//       return {
//         ...state,
//         ...action.payload,
//         isloading: false,
//         isAuth: true,
//       };

//     case AUTH_ERROR:
//     case LOGIN_FAIL:
//     case LOGOUT_SUCCESS:
//     case REGISTER_FAIL:
//       localStorage.removeItem('token')  
//       return {
//         ...state,
//         token: null,
//         user: null,
//         isloading: false,
//         isAuth: false,
//       };

//     default:
//       return state;
//   }
// };

// export default authReducer;
