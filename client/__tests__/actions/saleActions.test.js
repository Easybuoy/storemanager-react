import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { setSaleLoading, createSale, viewSales } from '../../src/actions/saleActions';
import { SET_SALE_LOADING, CREATE_SALE, RESET_SALE, GET_ERRORS, SET_ERRORS, SET_SALES } from '../../src/actions/types';
import mock from '../__mocks__/mock';

describe('saleActions', () => {
    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        moxios.install();
      });
      afterEach(() => {
        moxios.uninstall();
      });
    it('should set sale loading', () => {
        const response = setSaleLoading();
        expect(response.type).toEqual(SET_SALE_LOADING);
    });

  it(`dispatches SET_SALE_LOADING, CREATE_SALE, RESET_SALE when request is successful`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {data: mock.createAttendantMock},
      });
    });
    const expectedActions = [
      {
        type: SET_SALE_LOADING,
      },
      {
          type: CREATE_SALE,
      },
      {
        type: RESET_SALE,
    },
    ];
    const store = mockStore({});
    const data = {name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', password: '123456', type: 1}
    return store.dispatch(createSale(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches SET_SALE_LOADING, GET_ERRORS, SET_ERRORS and RESET_SALE when request fails`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {data: mock.getErrorsMock},
      });
    });
    const expectedActions = [
        {
            type: SET_SALE_LOADING,
          },
      {
        type: GET_ERRORS,
        payload: {data: mock.getErrorsMock}
      },
      {
          type: SET_ERRORS,
      },
      {
        type: RESET_SALE,
    },
     
    ];
    const store = mockStore({});
    const data = {name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', password: '123456', type: 1}
    return store.dispatch(createSale(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches set_SALE_LOADING, SET_SALES, when request is successful`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {data: mock.viewSalesMock},
      });
    });
    const expectedActions = [
        {
            type: SET_SALE_LOADING
        },
      {
        type: SET_SALES,
        payload: mock.viewSalesMock
      },
    ];
    const store = mockStore({});
    return store.dispatch(viewSales()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches SET_SALE_LOADING, GET_ERRORS, SET_ERRORS when request fails`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {data: mock.getErrorsMock},
      });
    });
    const expectedActions = [
        {
            type: SET_SALE_LOADING
        },
      {
        type: GET_ERRORS,
        payload: {data: mock.getErrorsMock}
      },
      {
          type: SET_ERRORS
      }
    ];
    const store = mockStore({});
    return store.dispatch(viewSales()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

});