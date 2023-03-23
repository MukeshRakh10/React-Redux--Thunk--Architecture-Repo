//Nothing but actions 
import {GET_PRODUCTS,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL} from "../constants/ProductsConstants";
import axios from  "axios";
export const productActions = () =>{
  return async (dispatch) =>{
     //dispacth used to call the reducer ({})
    dispatch({
        type : GET_PRODUCTS,
        products : [],
        error : "",
        loading : false
      })
      try{
        console.log("****In Production Action ****");
        const {data} = await axios.get("http://localhost:8080/products");
        console.log("Product Data is "+data);
        dispatch({
            type : GET_PRODUCTS_SUCCESS,
            products : data,
            error : "",
            loading :true
        })
   
      }catch(err){

        dispatch({
            type : GET_PRODUCTS_FAIL,
            products : [],
            error : err.message,
            loading : true
          })
      }
  }
} 
