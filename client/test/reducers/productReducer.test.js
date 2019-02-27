import productReducer from '../../src/reducers/productReducer';
import { SET_PRODUCT_LOADING, SET_PRODUCTS, CREATE_PRODUCT, DELETE_PRODUCT } from '../../src/actions/types';

describe('productReducer', () => {
    it('should return default state', () => {
        const INITIAL_STATE = {
            loading: false,
            products: [],
            isProductCreated: false,
            productDeleted: false
        };
        const state = productReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual(INITIAL_STATE);
    });

    it('should set product created', () => {
        const action = {
            type: CREATE_PRODUCT,
            payload: [{ id: 1, name: 'Phone', price: 1000, quantity: 90}]
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: false, isProductCreated: true, products: [], productDeleted: false});
    });

    it('should delete attendant created', () => {
        const action = {
            type: DELETE_PRODUCT,
            payload: 'Product deleted successfully'
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: false, isProductCreated: false, products: [], productDeleted: action.payload});
    });

    it('should set product loading', () => {
        const action = {
            type: SET_PRODUCT_LOADING,
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: true, isProductCreated: false, products: [], productDeleted: false});
    });

    it('should set products', () => {
        const action = {
            type: SET_PRODUCTS,
            payload: [{ id: 1, name: 'Milk', price: 100, quantity: 90}]
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: false, isProductCreated: false, products: action.payload, productDeleted: false});
    });
});