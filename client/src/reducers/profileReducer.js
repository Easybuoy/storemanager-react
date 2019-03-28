import { GET_PROFILE, SET_PROFILE_LOADING } from '../actions/types';

const INITIAL_STATE = {
    profile: {},
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_PROFILE :
            return { 
                ...state,  
                profile: action.payload,
                loading: false
            }; 
            case SET_PROFILE_LOADING:
            return {
                ...state,
                loading: true,
                profile: {}
            };
        default:
            return state;
    }
};