import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/store'
import App from './app/App';
import axios from 'axios'
import "./i18n";
import * as serviceWorker from './serviceWorker';


axios.defaults.headers.common["authorization"] = localStorage.getItem('token')
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();