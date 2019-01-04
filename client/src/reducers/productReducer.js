import { SET_PRODUCTS, SET_PRODUCTS_LOADING } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    products: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return { 
                ...state,  
                products: action.payload,
                loading: false,
            };
        case SET_PRODUCTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};