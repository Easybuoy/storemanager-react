import { SET_CURRENT_USER, SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: false,
    user: {}
};

export default (state = INITIAL_STATE, action) => { console.log(state)
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



        // case SIGN_IN:
        // const { loginType } = action;
        // console.log(loginType)
        //     return { ...state, isSignedIn: true, loginType: action.payload }

        // case SIGN_OUT:
        //     return { ...state, isSignedIn: false, user: action.payload } 