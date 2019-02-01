import { SET_PRODUCTS, SET_PRODUCT_LOADING, CREATE_PRODUCT, DELETE_PRODUCT } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    products: [],
    isProductCreated: false,
    productDeleted: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return { 
                ...state,  
                products: action.payload,
                loading: false,
                isProductCreated: false,
                productDeleted: false
            };
        case SET_PRODUCT_LOADING:
            return {
                ...state,
                loading: true
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                loading: false,
                isProductCreated: true
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                loading: false,
                productDeleted: action.payload
            }
        default:
            return state;
    }
};