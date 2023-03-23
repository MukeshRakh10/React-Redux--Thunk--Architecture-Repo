import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { productActions } from './actions/productsAction';
// import Product from './components/UserRegistration';
import {Signup} from "./components/Login/Js/Signup";
import {Login} from "./components/Login/Js/Login";

import {Routes, Route } from "react-router-dom"
import Products from './components/Products/Js/Products';

/* To perform subscribe & dispacth then  
    use the useSelector, and useDispatch hooks.
    useSelector : To perform the subscription operations.
    useDispatch : To perfrom the dispath operations.
*/

function App() {
  // const  dispatch = useDispatch();
  // const resp = useSelector(state => state);
  // console.log(resp);
  // useEffect(() => {
  //   dispatch(productActions());
  // }, []);
  // return (
  //   <div className="App">
  //     <h1>{JSON.stringify(resp)}</h1>
  //   </div>
  // );
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
  )
}
export default App;
