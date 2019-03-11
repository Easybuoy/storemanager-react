import axios from 'axios';

import { SET_PROFILE_LOADING, GET_PROFILE, GET_ERRORS, SET_ERRORS, } from './types';

const baseUrl = 'https://store--manager.herokuapp.com';
// const baseUrl = 'http://localhost:3000';

export const setProfileLoading = () => {
    return {
        type: SET_PROFILE_LOADING,
    }
}

export const viewProfile = () => dispatch => {
    dispatch(setProfileLoading())
    return axios.get(`${baseUrl}/api/v1/auth/current`)
    .then(res => {
        dispatch({
            type: GET_PROFILE,
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