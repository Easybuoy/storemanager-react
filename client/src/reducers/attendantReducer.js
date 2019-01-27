import { SET_ATTENDANT_CREATED, RESET_ATTENDANT_CREATED, } from '../actions/types';

const INITIAL_STATE = {
    isAttendantCreated: false,
    attendants: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_ATTENDANT_CREATED :
            return { 
                ...state,  
                isAttendantCreated: action.payload,
            } 
        case RESET_ATTENDANT_CREATED :
            return { 
                ...state,  
                isAttendantCreated: false,
            } 
        default:
            return state;
    }
};