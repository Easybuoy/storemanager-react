import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { setAttendantLoading, createAttendant, viewAttendants } from '../../src/actions/attendantActions';
import { SET_ATTENDANT_LOADING, SET_ATTENDANT_CREATED, RESET_ATTENDANT_CREATED, GET_ERRORS, SET_ERRORS, SET_ATTENDANTS } from '../../src/actions/types';
import mock from '../__mocks__/mock';

describe('attendantActions', () => {
    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        moxios.install();
      });
      afterEach(() => {
        moxios.uninstall();
      });
    it('should set attendant loading', () => {
        const response = setAttendantLoading();
        expect(response.type).toEqual(SET_ATTENDANT_LOADING);
    });

  it(`dispatches SET_ATTENDANT_LOADING, SET_ATTENDANT_CREATED, RESET_ATTENDANTS_CREATED when request is successful`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {data: mock.createAttendantMock},
      });
    });
    const expectedActions = [
      {
        type: SET_ATTENDANT_LOADING,
      },
      {
          type: SET_ATTENDANT_CREATED,
          payload: undefined
      },
      {
        type: RESET_ATTENDANT_CREATED,
    },
    ];
    const store = mockStore({});
    const data = {name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', password: '123456', type: 1}
    return store.dispatch(createAttendant(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches SET_PRODUCTS, GET_ERRORS, SET_ERRORS when request fails`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {data: mock.getErrorsMock},
      });
    });
    const expectedActions = [
      {
        type: GET_ERRORS,
        payload: mock.getErrorsMock
      },
      {
          type: SET_ERRORS,
      },
     
    ];
    const store = mockStore({});
    const data = {name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', password: '123456', type: 1}
    return store.dispatch(createAttendant(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches SET_ATTENDANTS_LOADING, SET_ATTENDANTS, when request is successful`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {data: mock.viewAttendantsMock},
      });
    });
    const expectedActions = [
        {
            type: SET_ATTENDANT_LOADING
        },
      {
        type: SET_ATTENDANTS,
        payload: mock.viewAttendantsMock
      },
    ];
    const store = mockStore({});
    return store.dispatch(viewAttendants()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it(`dispatches SET_PRODUCTS, GET_ERRORS, SET_ERRORS when request fails`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {data: mock.getErrorsMock},
      });
    });
    const expectedActions = [
        {
            type: SET_ATTENDANT_LOADING
        },
      {
        type: GET_ERRORS,
        payload: mock.getErrorsMock
      },
      {
          type: SET_ERRORS
      }
    ];
    const store = mockStore({});
    return store.dispatch(viewAttendants()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

});