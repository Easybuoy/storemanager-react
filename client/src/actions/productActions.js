import axios from 'axios';

import { GET_ERRORS, SET_PRODUCTS, SET_PRODUCTS_LOADING, CREATE_PRODUCT, SET_ERRORS } from './types';

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

export const createProduct = (productData) => dispatch => {
    dispatch(setProductsLoading())
    const formData = new FormData();
    formData.append('productImage', productData.productimage);
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('quantity', productData.quantity);
    axios.post('https://store--manager.herokuapp.com/api/v1/products/', formData)
    .then(res => {
        // dispatch(setProductsLoading())
        dispatch({
            type: SET_ERRORS,
        });
        dispatch({
            type: CREATE_PRODUCT,
        });
        dispatch({
            type: SET_PRODUCTS,
            payload: []
        });

    })
    .catch(err => {
        dispatch({
            type: SET_PRODUCTS,
            payload: []
        });
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        dispatch({
            type: SET_ERRORS,
        })
        
    })
}

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