import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import store from './store';
import App from "./App.js";
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, signOut } from './actions/authActions';
// Check for token
if (localStorage.token) {
    const { token } = localStorage;
    // Set Auth TOken
    setAuthToken(token);

    // Decode token
    const decodedToken = jwt_decode(token);

     // Set current user
     store.dispatch(setCurrentUser(decodedToken));

     // Check expired token
     const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
     // Logout user
        store.dispatch(signOut());
    }

}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root"));