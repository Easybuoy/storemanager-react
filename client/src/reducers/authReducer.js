import { SET_CURRENT_USER, SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: false,
    user: {}
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return { 
                ...state,  
                isSignedIn: Object.keys(action.payload).length > 0,
                user: action.payload
            } 
        default:
            return state;
    }
};