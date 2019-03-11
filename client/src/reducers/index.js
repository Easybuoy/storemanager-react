import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import productReducer from './productReducer';
import attendantReducer from './attendantReducer';
import saleReducer from './saleReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    products: productReducer,
    attendants: attendantReducer,
    sales: saleReducer,
    profile: profileReducer
});