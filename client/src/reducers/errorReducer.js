import { GET_ERRORS, SET_ERRORS } from '../actions/types';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case GET_ERRORS:
            return action.payload; 
        case SET_ERRORS:
            return INITIAL_STATE;
        default:
        return state;
    }
};