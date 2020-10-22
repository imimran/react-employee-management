import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { userReducer } from "./reducers/user";
import { organizationReducer } from "./reducers/organization";



const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  users: userReducer,
  organizations: organizationReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store