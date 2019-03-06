import authReducer from '../../src/reducers/authReducer';
import { SET_CURRENT_USER } from '../../src/actions/types';

describe('authReducer', () => {
    it('should return default state', () => {
        const INITIAL_STATE = {
            isSignedIn: false,
            user: {}
        };
        const state = authReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should set the current user', () => {
        const action = {
            type: SET_CURRENT_USER,
            payload: { id: 1, name: 'Ekunola Ezekiel', status: 1}
        }
        const state = authReducer(undefined, action);
        expect(state).toEqual({isSignedIn: true, user: action.payload});
    });
});