import errorReducer from '../../src/reducers/errorReducer';
import { SET_ERRORS, GET_ERRORS } from '../../src/actions/types';

const INITIAL_STATE = {};

describe('errorReducer', () => {
    it('should return default state', () => {

        const state = errorReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should set errors', () => {
        const action = {
            type: SET_ERRORS,
        }
        const state = errorReducer(undefined, action);
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should get errors', () => {
        const action = {
            type: GET_ERRORS,
            payload: { name: 'Name field is required', password: 'Password field is required' }
        }
        const state = errorReducer(undefined, action);
        expect(state).toEqual(action.payload);
    });
});