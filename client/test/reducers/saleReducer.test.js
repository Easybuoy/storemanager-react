import saleReducer from '../../src/reducers/saleReducer';
import { SET_SALE_LOADING, CREATE_SALE, RESET_SALE, SET_SALES } from '../../src/actions/types';

const INITIAL_STATE = {
    loading: false,
    isSaleCreated: false,
    sales: []
};

describe('saleReducer', () => {
    it('should return default state', () => {
        
        const state = saleReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should set sale created', () => {
        const action = {
            type: CREATE_SALE,
            payload: 'Sale created successfully'
        }
        const state = saleReducer(undefined, action);
        expect(state).toEqual({loading: false, isSaleCreated: true, sales: []});
    });

    it('should set sale loading', () => {
        const action = {
            type: SET_SALE_LOADING,
        }
        const state = saleReducer(undefined, action);
        expect(state).toEqual({loading: true, isSaleCreated: false, sales: []});
    });

    it('should reset sale ', () => {
        const action = {
            type: RESET_SALE,
        }
        const state = saleReducer(undefined, action);
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should set sale ', () => {
        const action = {
            type: SET_SALES,
            payload: [ {id: 1, name: 'iPhone'}]
        }
        const state = saleReducer(undefined, action);
        expect(state).toEqual({loading: false, isSaleCreated: false, sales: action.payload});
    });
});