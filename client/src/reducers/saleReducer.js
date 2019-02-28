import { } from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    isSaleCreated: false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};