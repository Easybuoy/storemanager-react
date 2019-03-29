import productReducer from '../../src/reducers/productReducer';
import { SET_PRODUCT_LOADING, SET_PRODUCTS, CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SET_PRODUCT } from '../../src/actions/types';

describe('productReducer', () => {
    it('should return default state', () => {
        const INITIAL_STATE = {
            loading: false,
            products: [],
            product: {},
            isProductCreated: false,
            isProductEdited: false,
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
        expect(state).toEqual({loading: false, isProductCreated: true, products: [], productDeleted: false, isProductEdited: false, product: {}});
    });

    it('should delete product', () => {
        const action = {
            type: DELETE_PRODUCT,
            payload: 'Product deleted successfully'
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: false, isProductCreated: false, products: [], productDeleted: action.payload, isProductEdited: false, product: {}});
    });

    it('should edit product', () => {
        const action = {
            type: EDIT_PRODUCT,
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: false, isProductCreated: false, products: [], productDeleted: false, isProductEdited: true, product: {}});
    });

    it('should set product loading', () => {
        const action = {
            type: SET_PRODUCT_LOADING,
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: true, isProductCreated: false, products: [], productDeleted: false, isProductEdited: false, product: {}});
    });

    it('should set products', () => {
        const action = {
            type: SET_PRODUCTS,
            payload: [{ id: 1, name: 'Milk', price: 100, quantity: 90}]
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: false, isProductCreated: false, products: action.payload, productDeleted: false, isProductEdited: false, product: {}});
    });

    it('should set product', () => {
        const action = {
            type: SET_PRODUCT,
            payload: { id: 1, name: 'Milk', price: 100, quantity: 90}
        }
        const state = productReducer(undefined, action);
        expect(state).toEqual({loading: false, isProductCreated: false, products: [], productDeleted: false, isProductEdited: false, product: action.payload});
    });
});