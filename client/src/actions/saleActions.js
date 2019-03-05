import axios from 'axios';

import { SET_SALE_LOADING, CREATE_SALE, GET_ERRORS, SET_ERRORS, RESET_SALE, SET_SALES } from './types';

const baseUrl = 'https://store--manager.herokuapp.com';
// const baseUrl = 'http://localhost:3000';

export const createSale = (saleData) => dispatch => { console.log(saleData)
    dispatch(setSaleLoading())
    axios.post(`${baseUrl}/api/v1/sales/`, saleData)
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

export const viewSales = () => dispatch => {
    dispatch(setSaleLoading())
    axios.get(`${baseUrl}/api/v1/sales`)
    .then(res => {
        dispatch({
            type: SET_SALES,
            payload: res.data.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        dispatch({
            type: SET_ERRORS,
        })
    })
}