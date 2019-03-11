import profileReducer from '../../src/reducers/profileReducer';
import { SET_PROFILE_LOADING, GET_PROFILE } from '../../src/actions/types';

describe('profileReducer', () => {
    it('should return default state', () => {
        const INITIAL_STATE = {
            loading: false,
            profile: {},
        };
        const state = profileReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should get profile', () => {
        const action = {
            type: GET_PROFILE,
            payload: { id: 1, email: 'ezekiel@gmail.com', status: 1, name: 'Ekunola Ezekiel' }
        }
        const state = profileReducer(undefined, action);
        expect(state).toEqual({ loading: false, profile: action.payload });
    });

    it('should set profile loading', () => {
        const action = {
            type: SET_PROFILE_LOADING,
        }
        const state = profileReducer(undefined, action);
        expect(state).toEqual({ loading: true, profile: {} });
    });
});