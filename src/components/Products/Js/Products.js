import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {productActions}  from "../../Products/actions/ProductsAction"

const Products = () => {
    const  dispatch = useDispatch();
    useEffect(() => {
      dispatch(productActions());
    }, []);
    const resp = useSelector(state => state.red2);
    console.log(resp);
    return (
      <div className="App">
        <h1>{JSON.stringify(resp)}</h1>
      </div>
    );
  
  };

export default Products;