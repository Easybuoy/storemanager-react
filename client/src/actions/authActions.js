import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SIGN_OUT, SET_CURRENT_USER, SET_ERRORS } from './types';

// const baseUrl = 'https://store--manager.herokuapp.com';
const baseUrl = 'http://localhost:3000';

export const signIn = (userData) => dispatch => {
    axios.post(`${baseUrl}/api/v1/auth/login`, userData)
    .then(res => {
        const { token } = res.data.data;
        // Save to localstorage
        localStorage.setItem('token', token);
        // Set token to auth header
        setAuthToken(token);

        // Decode token
        const decodedToken = jwt_decode(token); 
        dispatch({
            type: SET_ERRORS
        });
        dispatch(setCurrentUser(decodedToken));
    })
    .catch(err => {
        if (err.response.data.data.email) {
            toast.error(err.response.data.data.email);
        }

        if (err.response.data.data.password) {
            toast.error(err.response.data.data.password);
        }
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data.data
        });
    })
    
};

export const signOut = () => dispatch => {
    // Remove token from localstorage
    localStorage.removeItem('token');

    // Remove auth header from requests
    setAuthToken(false);

    // Set current user to {}
    dispatch(setCurrentUser({}));
    toast.success('Signed out sucessfully')
    return {
        type: SIGN_OUT
    };
}; 

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    }
}