import axios from 'axios';

import { GET_ERRORS, SET_PRODUCTS, SET_PRODUCTS_LOADING } from './types';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading())
    axios.get('https://store--manager.herokuapp.com/api/v1/products/')
    .then(res => {
        const { data } = res.data;
        dispatch(setProducts(data));

    })
    .catch(err => { 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data.data || err.response.data.message
        });
    });
    
};

export const setProductsLoading = () => {
    return {
        type: SET_PRODUCTS_LOADING,
    }
}

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}