import saleReducer from '../../src/reducers/saleReducer';
import { SET_SALE_LOADING, CREATE_SALE, RESET_SALE } from '../../src/actions/types';

describe('saleReducer', () => {
    it('should return default state', () => {
        const INITIAL_STATE = {
            loading: false,
            isSaleCreated: false,
        };
        const state = saleReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should set sale created', () => {
        const action = {
            type: CREATE_SALE,
            payload: 'Sale created successfully'
        }
        const state = saleReducer(undefined, action);
        expect(state).toEqual({loading: false, isSaleCreated: true, });
    });

    it('should set sale loading', () => {
        const action = {
            type: SET_SALE_LOADING,
        }
        const state = saleReducer(undefined, action);
        expect(state).toEqual({loading: true, isSaleCreated: false, });
    });

    it('should reset sale ', () => {
        const action = {
            type: RESET_SALE,
        }
        const state = saleReducer(undefined, action);
        expect(state).toEqual(INITIAL_STATE);
    });
});