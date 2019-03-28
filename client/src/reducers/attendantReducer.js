import { SET_ATTENDANT_CREATED, RESET_ATTENDANT_CREATED, SET_ATTENDANT_LOADING, SET_ATTENDANTS, DELETE_ATTENDANT } from '../actions/types';

const INITIAL_STATE = {
    isAttendantCreated: false,
    attendants: [],
    loading: false,
    attendantDeleted: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_ATTENDANT_CREATED :
            return { 
                ...state,  
                isAttendantCreated: action.payload,
                loading: false,
                attendantDeleted: false
            }; 
        case RESET_ATTENDANT_CREATED :
            return { 
                ...state,  
                isAttendantCreated: false,
                loading: false,
                attendantDeleted: false
            } ;
            case SET_ATTENDANT_LOADING:
            return {
                ...state,
                loading: true,
                attendantDeleted: false
            };
        case SET_ATTENDANTS :
            return {
                ...state,
                attendants: action.payload,
                loading: false,
                attendantDeleted: false
            };
        case DELETE_ATTENDANT:
            return {
                ...state,
                loading: false,
                attendantDeleted: action.payload,
            }
        default:
            return state;
    }
};