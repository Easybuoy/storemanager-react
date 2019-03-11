import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { viewProfile, setProfileLoading } from '../../src/actions/profileActions';
import { SET_PROFILE_LOADING, GET_PROFILE, GET_ERRORS, SET_ERRORS } from '../../src/actions/types';
import mock from '../__mocks__/mock';

describe('profileActions', () => {
    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        moxios.install();
      });
      afterEach(() => {
        moxios.uninstall();
      });
    it('should set profile loading', () => {
        const response = setProfileLoading();
        expect(response.type).toEqual(SET_PROFILE_LOADING);
    });

    it(`dispatches SET_PROFILE_LOADING and GET_PROFILE when request is successful`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {data: mock.viewProfileMock},
      });
    });
    const expectedActions = [
      {
        type: SET_PROFILE_LOADING,
      },
      {
          type: GET_PROFILE,
          payload: mock.viewProfileMock
      },
    ];
    const store = mockStore({});
    return store.dispatch(viewProfile()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches SET_PRODUCTS_LOADING and GET_ERRORS when request fails`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {data: mock.getErrorsMock},
      });
    });
    const expectedActions = [
      {
        type: SET_PROFILE_LOADING,
      },
      {
          type: GET_ERRORS,
          payload: {data: mock.getErrorsMock}
      },
      {
        type: SET_ERRORS,
    }
    ];
    const store = mockStore({});
    return store.dispatch(viewProfile()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

//   it(`dispatches SET_PRODUCTS_LOADING, SET_ERRORS, CREATE_PRODUCT and SET_PRODUCTS when request is successful`, (done) => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: {data: mock.getProductsMock},
//       });
//     });
//     const expectedActions = [
//       {
//         type: SET_PRODUCT_LOADING,
//       },
//       {
//           type: SET_ERRORS,
//       },
//       {
//         type: CREATE_PRODUCT,
//     },
//       {
//         type: SET_PRODUCTS,
//         payload: []
//     }
//     ];
//     const store = mockStore({});
//     const data = {name: 'iPhone 6', productimage: '', description: 'Good phone', price: 5000}
//     return store.dispatch(createProduct(data)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//       done();
//     });
//   });

//   it(`dispatches SET_PRODUCTS, GET_ERRORS, SET_ERRORS when request fails`, (done) => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 400,
//         response: {data: mock.getErrorsMock},
//       });
//     });
//     const expectedActions = [
//         {
//             type: SET_PRODUCT_LOADING
//         },
//         {
//             type: SET_PRODUCTS,
//             payload: []
//         },
//       {
//         type: GET_ERRORS,
//         payload: mock.getErrorsMock
//       },
//       {
//           type: SET_ERRORS,
//       },
     
//     ];
//     const store = mockStore({});
//     const data = {name: 'iPhone 6', productimage: '', description: 'Good phone', price: 5000}
//     return store.dispatch(createProduct(data)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//       done();
//     });
//   });

//   it(`dispatches SET_PRODUCTS_LOADING, DELETE_PRODUCT, and SET_PRODUCTS_LOADING when request is successful`, (done) => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: {data: mock.deleteProductMock},
//       });
//     });
//     const expectedActions = [
//       {
//         type: SET_PRODUCT_LOADING,
//       },
//       {
//           type: DELETE_PRODUCT,
//           payload: undefined
//       },
//       {
//         type: SET_PRODUCT_LOADING,
//       },
//     ];
//     const store = mockStore({});
//     return store.dispatch(deleteProduct(1)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//       done();
//     });
//   });

//   it(`dispatches SET_PRODUCTS, GET_ERRORS, SET_ERRORS when request fails`, (done) => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 400,
//         response: {data: mock.getErrorsMock},
//       });
//     });
//     const expectedActions = [
//         {
//             type: SET_PRODUCT_LOADING
//         },
//       {
//         type: GET_ERRORS,
//         payload: mock.getErrorsMock
//       },
//     ];
//     const store = mockStore({});
//     return store.dispatch(deleteProduct(1)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//       done();
//     });
//   });

});