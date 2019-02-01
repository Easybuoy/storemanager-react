import { SET_ATTENDANT_CREATED, RESET_ATTENDANT_CREATED, SET_ATTENDANT_LOADING, SET_ATTENDANTS, } from '../actions/types';

const INITIAL_STATE = {
    isAttendantCreated: false,
    attendants: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_ATTENDANT_CREATED :
            return { 
                ...state,  
                isAttendantCreated: action.payload,
                loading: false
            }; 
        case RESET_ATTENDANT_CREATED :
            return { 
                ...state,  
                isAttendantCreated: false,
                loading: false
            } ;
            case SET_ATTENDANT_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_ATTENDANTS :
            return {
                ...state,
                attendants: action.payload,
                loading: false
            }
        default:
            return state;
    }
};