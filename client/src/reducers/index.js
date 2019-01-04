import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import productReducer from './productReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    products: productReducer,
});