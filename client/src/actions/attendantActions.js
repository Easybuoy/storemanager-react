import axios from 'axios';

import { GET_ERRORS, SET_ATTENDANT_CREATED, RESET_ATTENDANT_CREATED, SET_ERRORS, SET_ATTENDANT_LOADING, SET_ATTENDANTS } from './types';

const baseUrl = 'https://store--manager.herokuapp.com';
// const baseUrl = 'http://localhost:3000';

export const createAttendant = (userData) => dispatch => {
    const formData = new FormData();
    formData.append('userImage', userData.userimage);
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    formData.append('type', userData.type);
    return axios.post(`${baseUrl}/api/v1/auth/signup`, formData)
    .then(res => {
        dispatch(setAttendantLoading())

        dispatch({
            type: SET_ATTENDANT_CREATED,
            payload: res.data.message
        });

        dispatch({
            type: RESET_ATTENDANT_CREATED
        });

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
        dispatch({
            type: SET_ERRORS,
        })
    });
    
};


export const viewAttendants = () => dispatch => {
    dispatch(setAttendantLoading())
    return axios.get(`${baseUrl}/api/v1/auth/attendants`)
    .then(res => {
        dispatch({
            type: SET_ATTENDANTS,
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
            payload: error.message || err.response.data.data || err.response.data.message
        });
        dispatch({
            type: SET_ERRORS,
        })
    });
}

export const setAttendantLoading = () => {
    return {
        type: SET_ATTENDANT_LOADING,
    }
}