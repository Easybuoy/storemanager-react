import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SIGN_OUT, SET_CURRENT_USER } from './types';

export const signIn = (userData) => dispatch => { console.log(userData)
    axios.post('https://store--manager.herokuapp.com/api/v1/auth/login', userData)
    .then(res => {
        console.log(res.data)
        const { token } = res.data.data;
        // Save to localstorage
        localStorage.setItem('token', token);
        // Set token to auth header
        setAuthToken();

        // Decode token
        const decodedToken = jwt_decode(token); 
        dispatch(setCurrentUser(decodedToken));
    })
    .catch(err => {
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