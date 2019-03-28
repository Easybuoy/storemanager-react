import attendantReducer from '../../src/reducers/attendantReducer';
import { SET_ATTENDANT_CREATED, RESET_ATTENDANT_CREATED, SET_ATTENDANT_LOADING, SET_ATTENDANTS, DELETE_ATTENDANT } from '../../src/actions/types';

describe('attendantReducer', () => {
    it('should return default state', () => {
        const INITIAL_STATE = {
            isAttendantCreated: false,
            attendants: [],
            loading: false,
            attendantDeleted: false
        };
        const state = attendantReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should set attendant created', () => {
        const action = {
            type: SET_ATTENDANT_CREATED,
            payload: { id: 1, name: 'Ekunola Ezekiel', status: 1}
        }
        const state = attendantReducer(undefined, action);
        expect(state).toEqual({loading: false, isAttendantCreated: action.payload, attendants: [], attendantDeleted: false});
    });

    it('should reset attendant created', () => {
        const action = {
            type: RESET_ATTENDANT_CREATED,
        }
        const state = attendantReducer(undefined, action);
        expect(state).toEqual({loading: false, isAttendantCreated: false, attendants: [], attendantDeleted: false });
    });

    it('should set attendant loading', () => {
        const action = {
            type: SET_ATTENDANT_LOADING,
        }
        const state = attendantReducer(undefined, action);
        expect(state).toEqual({loading: true, isAttendantCreated: false, attendants: [], attendantDeleted: false});
    });

    it('should set attendants', () => {
        const action = {
            type: SET_ATTENDANTS,
            payload: [{ id: 1, name: 'Ekunola Ezekiel', status: 1}]
        }
        const state = attendantReducer(undefined, action);
        expect(state).toEqual({loading: false, isAttendantCreated: false, attendants: action.payload, attendantDeleted: false});
    });

    it('should delete sale attendant', () => {
        const action = {
            type: DELETE_ATTENDANT,
            payload: 'Attendant deleted successfully'
        }
        const state = attendantReducer(undefined, action);
        expect(state).toEqual({loading: false, isAttendantCreated: false, attendants: [], attendantDeleted: action.payload});
    });
});