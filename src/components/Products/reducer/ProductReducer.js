const { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } = require("../constants/ProductsConstants");
//reducer nothing but function or lambda function
/*
    reducer takes two arguments
    state :
    action : receives the data from actions (productActions)
*/

const initialState = {
    loading: false,
    products: [],
    error: ""
}
export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
        case GET_PRODUCTS_SUCCESS:
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: action.loading,
                products: action.products,
                error: action.error
            };
        default: return { ...state }
    }
}