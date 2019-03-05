import { SET_SALE_LOADING, CREATE_SALE, RESET_SALE, SET_SALES } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    isSaleCreated: false,
    sales: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_SALE:
            return {
                ...state,
                loading: false,
                isSaleCreated: true
            };
            case RESET_SALE:
            return {
                ...state,
                loading: false,
                isSaleCreated: false
            };
        case SET_SALE_LOADING:
            return {
                ...state,
                loading: true
            };
            case SET_SALES:
            return {
                ...state,
                loading: false,
                isSaleCreated: false,
                sales: action.payload
            };
        default:
            return state;
    }
};