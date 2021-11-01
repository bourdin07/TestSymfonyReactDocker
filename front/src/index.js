import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { services as API } from './services/services';
import { api as axiosAPI } from './config/axios/api';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from "./config/store/reducer/rootReducer";
import { login } from './config/axios/login';
import { logout } from './config/axios/logout';
import { refreshToken } from './config/axios/refreshToken';

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const services = new API();
export const api = axiosAPI();

export const apiLogin = login();
export const apiLogout = logout();

export const apiRefreshToken = refreshToken();

ReactDOM.render(
  <Provider
    store={store}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
