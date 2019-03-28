import axios from 'axios';

import { GET_ERRORS, SET_PRODUCTS, SET_PRODUCT_LOADING, CREATE_PRODUCT, SET_ERRORS, DELETE_PRODUCT, EDIT_PRODUCT, SET_PRODUCT } from './types';

// const baseUrl = 'https://store--manager.herokuapp.com';
const baseUrl = 'http://localhost:3000';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading())
return axios.get(`${baseUrl}/api/v1/products/`)
    .then(res => {
        const { data } = res.data;
        dispatch(setProducts(data));

    })
    .catch(err => {
        let error = {};
        if (err.message === 'Network Error') {
            error.message = err.message;
        }
        dispatch({
            type: GET_ERRORS,
            payload: error.message || err.response.data.data || err.response.data.message
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
   return axios.post(`${baseUrl}/api/v1/products/`, formData)
    .then(res => {
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
        let error = {};
        if (err.message === 'Network Error') {
            error.message = err.message;
        }

        dispatch({
            type: SET_PRODUCTS,
            payload: []
        });
        dispatch({
            type: GET_ERRORS,
            payload: error.message || err.response.data.data
        })
        dispatch({
            type: SET_ERRORS,
        })
        
    })
}

export const setProductsLoading = () => {
    return {
        type: SET_PRODUCT_LOADING,
    }
}

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const setProduct = (product) => {
    return {
        type: SET_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (id) => dispatch => {
    dispatch(setProductsLoading())
   return axios.delete(`${baseUrl}/api/v1/products/${id}`)
    .then(res => {
        const { data } = res;
        dispatch({
            type: DELETE_PRODUCT,
            payload: data.message
        });
        dispatch(getProducts());
        return res;
    })
    .catch(err => { 
        let error = {};
        if (err.message === 'Network Error') {
            error.message = err.message;
        }

        dispatch({
            type: GET_ERRORS,
            payload: error.message || err.response.data.data || err.response.data.message
        });
        return err;
    });
    
};

export const getProductById = (id) => dispatch => {
    dispatch(setProductsLoading())
   return axios.get(`${baseUrl}/api/v1/products/${id}`)
    .then(res => {
        const { data } = res.data;
        dispatch({
            type: SET_PRODUCT,
            payload: data
        });
        // dispatch({
        //     type: SET_PRODUCTS,
        //     payload: []
        // });
        return res;
    })
    .catch(err => { 
        let error = {};
        if (err.message === 'Network Error') {
            error.message = err.message;
        }

        dispatch({
            type: GET_ERRORS,
            payload: error.message || err.response.data.data || err.response.data.message
        });
        return err;
    });
    
};

export const editProduct = (id, productData) => dispatch => {
    dispatch(setProductsLoading())
    const formData = new FormData();
    if (productData.productimage !== undefined) {
        formData.append('productImage', productData.productimage);
    }
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('quantity', productData.quantity);

   return axios.put(`${baseUrl}/api/v1/products/${id}`, formData)
    .then(res => {
        dispatch({
            type: SET_ERRORS,
        });
        dispatch({
            type: EDIT_PRODUCT,
        });
        dispatch({
            type: SET_PRODUCTS,
            payload: []
        });

    })
    .catch(err => {
        let error = {};
        if (err.message === 'Network Error') {
            error.message = err.message;
        }

        dispatch({
            type: SET_PRODUCTS,
            payload: []
        });
        dispatch({
            type: GET_ERRORS,
            payload: error.message || {message: err.response.data.message}
        })
        dispatch({
            type: SET_ERRORS,
        })
        
    })
}