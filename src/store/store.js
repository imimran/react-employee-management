import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { userLoginReducer, userReducer } from "./reducers/user";
import { organizationReducer } from "./reducers/organization";
import errorReducer from './reducers/error';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  users: userReducer,
  userLogin: userLoginReducer,
  error: errorReducer,
  auth: authReducer,
  organizations: organizationReducer,
});

const userInfoFromStroge = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null 

const initialState = {
  userLogin : { userInfo : userInfoFromStroge}
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store