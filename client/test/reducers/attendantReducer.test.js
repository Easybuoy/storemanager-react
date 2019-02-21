import attendantReducer from '../../src/reducers/attendantReducer';
import { SET_ATTENDANT_CREATED } from '../../src/actions/types';

describe('attendantReducer', () => {
    it('should return default state', () => {
        const INITIAL_STATE = {
            isAttendantCreated: false,
            attendants: [],
            loading: false
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
        console.log(state)
        expect(state).toEqual({loading: false, isAttendantCreated: action.payload, attendants: []});
    });
});