import { SET_PRODUCTS, SET_PRODUCTS_LOADING, CREATE_PRODUCT } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    products: [],
    isProductCreated: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return { 
                ...state,  
                products: action.payload,
                loading: false,
                isProductCreated: false
            };
        case SET_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                loading: false,
                isProductCreated: true
            }
        default:
            return state;
    }
};