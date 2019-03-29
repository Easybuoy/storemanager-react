import { SET_PRODUCTS, SET_PRODUCT_LOADING, CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SET_PRODUCT } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    products: [],
    product: {},
    isProductCreated: false,
    isProductEdited: false,
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
                productDeleted: false,
                isProductEdited: false,
            };
            case SET_PRODUCT:
            return { 
                ...state, 
                product: action.payload,
                loading: false,
                isProductCreated: false,
                productDeleted: false,
                isProductEdited: false,
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
        case EDIT_PRODUCT:
            return {
                ...state,
                loading: false,
                isProductEdited: true
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