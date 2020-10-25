import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/store'
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
   
  </BrowserRouter>
   </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();