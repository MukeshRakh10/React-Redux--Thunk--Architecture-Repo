import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import SignUpReducer from "./components/Login/Reducer/SignUpReducer";
  import $ from 'jquery';
import Popper from 'popper.js';

// Provider : Its used to make the createStore(store) available to component(app).
 //applyMiddleware : It used to apply the middleware like 
 //thunk or sage
/*Thunk : It work like just watch for watch the constants
      like GET_PRODUCT,GET_PRODUCT_SUCCESS,GET_PRODUCT_FAIL
*/
import thunk from 'redux-thunk';

import { BrowserRouter } from "react-router-dom"
import { LoginReducer } from './components/Login/Reducer/LoginReducer';
// const store = createStore(LoginReducer,applyMiddleware(thunk));
import {productsReducer} from "./components/Products/reducer/ProductReducer";

const store = createStore(combineReducers({
  red1:LoginReducer,
  red2:productsReducer
}), applyMiddleware(thunk));

// const store = createStore(productsReducer,applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Provider store = {store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
