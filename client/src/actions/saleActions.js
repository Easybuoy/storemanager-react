import axios from 'axios';

import { SET_SALE_LOADING, CREATE_SALE, GET_ERRORS, SET_ERRORS, RESET_SALE, SET_SALES } from './types';

const baseUrl = 'https://store--manager.herokuapp.com';
// const baseUrl = 'http://localhost:3000';

export const createSale = (saleData) => dispatch => { 
    dispatch(setSaleLoading())
    return axios.post(`${baseUrl}/api/v1/sales/`, saleData)
    .then(res => {
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
    .catch(err => {
        let error = {};
        if (err.message === 'Network Error') {
            error.message = err.message;
        }

        dispatch({
            type: GET_ERRORS,
            payload: error.message || err.response.data
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

export const viewSales = () => dispatch => {
    dispatch(setSaleLoading())
    return axios.get(`${baseUrl}/api/v1/sales`)
    .then(res => {
        dispatch({
            type: SET_SALES,
            payload: res.data.data
        })
    })
    .catch(err => {
        let error = {};
        if (err.message === 'Network Error') {
            error.message = err.message;
        }

        dispatch({
            type: GET_ERRORS,
            payload: error.message || err.response.data
        })
        dispatch({
            type: SET_ERRORS,
        })
    })
}