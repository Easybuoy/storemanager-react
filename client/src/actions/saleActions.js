import axios from 'axios';

import { SET_SALE_LOADING, CREATE_SALE, GET_ERRORS, SET_ERRORS, RESET_SALE } from './types';

// const baseUrl = 'https://store--manager.herokuapp.com';
const baseUrl = 'http://localhost:3000';

export const createSale = (saleData) => dispatch => { console.log(saleData)
    dispatch(setSaleLoading())
    axios.post(`${baseUrl}/api/v1/sales/`, saleData)
    .then(res => { console.log(res.data)
        // dispatch(setProductsLoading())
        // dispatch({
        //     type: SET_ERRORS,
        // });
        dispatch({
            type: CREATE_SALE,
        });
        dispatch({
            type: RESET_SALE,
        })

    })
    .catch(err => { console.log(err.response.data)
        // dispatch({
        //     type: SET_PRODUCTS,
        //     payload: []
        // });
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        dispatch({
            type: SET_ERRORS,
        })
        dispatch({
            type: RESET_SALE,
        })
        
    })
}

export const setSaleLoading = () => {
    return {
        type: SET_SALE_LOADING,
    }
}

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
