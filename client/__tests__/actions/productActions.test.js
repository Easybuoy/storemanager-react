import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { signIn, setCurrentUser, signOut, setProductsLoading, setProducts, getProducts } from '../../src/actions/productActions';
import { SET_PRODUCT_LOADING, SET_PRODUCTS, GET_ERRORS } from '../../src/actions/types';
import mock from '../__mocks__/mock';

describe('productActions', () => {
    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        moxios.install();
      });
      afterEach(() => {
        moxios.uninstall();
      });
    it('should set products loading', () => {
        const response = setProductsLoading();
        expect(response.type).toEqual(SET_PRODUCT_LOADING);
    });

    it('should set products loading', () => {
        const data = [{ name: 'Samsung', quantity: 1234, price: 1000 }];
        const response = setProducts(data);
        expect(response.type).toEqual(SET_PRODUCTS);
        expect(response.payload).toEqual(data);
    });

    it(`dispatches SET_PRODUCTS_LOADING and SET_PRODUCTS when request is successful`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {data: mock.getProductsMock},
      });
    });
    const expectedActions = [
      {
        type: SET_PRODUCT_LOADING,
      },
      {
          type: SET_PRODUCTS,
          payload: mock.getProductsMock
      }
    ];
    const store = mockStore({});
    return store.dispatch(getProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches SET_PRODUCTS_LOADING and SET_PRODUCTS when request is successful`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {data: mock.getErrorsMock},
      });
    });
    const expectedActions = [
      {
        type: SET_PRODUCT_LOADING,
      },
      {
          type: GET_ERRORS,
          payload: mock.getErrorsMock
      }
    ];
    const store = mockStore({});
    return store.dispatch(getProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

//       it(`dispatches SET_CURRENT_USER on signOut`, (done) => {
//       const expectedActions = [
//         {
//           type: SET_CURRENT_USER,
//           payload: {}
//         },
//       ];
//       const store = mockStore({});
//       store.dispatch(signOut({email: '', password: '1234'}))
//       // .then(() => {
//         expect(store.getActions()).toEqual(expectedActions);
//         done();
//       // });
//     });
});