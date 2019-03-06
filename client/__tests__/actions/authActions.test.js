import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import { signIn, setCurrentUser, signOut } from '../../src/actions/authActions';
import { GET_ERRORS, SET_ERRORS, SET_CURRENT_USER, SIGN_OUT } from '../../src/actions/types';
import mock from '../__mocks__/mock';

describe('authActions', () => {
    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        moxios.install();
      });
      afterEach(() => {
        moxios.uninstall();
      });
    it('should set the current user', () => {
        const data = { email: 'ezekiel', password: 1234};
        const response = setCurrentUser(data);
        expect(response.type).toEqual(SET_CURRENT_USER);
        expect(response.payload).toEqual(data);
    });

    // it(`dispatches SET_ERRORS and SET_CURRENT_USER when request is successful`, (done) => {
    //   moxios.wait(() => {
    //     const request = moxios.requests.mostRecent();
    //     request.respondWith({
    //       status: 200,
    //       // response: {data: mock.setCurrentUserMock},
    //     });
    //   });
    //   const expectedActions = [
    //     {
    //       type: SET_ERRORS,
    //     },
    //     {
    //       type: SET_CURRENT_USER,
    //       payload: mock.setCurrentUserMock
    //     }
    //   ];
    //   const store = mockStore({});
    //   return store.dispatch(signIn({email: '', password: '1234'})).then(() => {
    //     expect(store.getActions()).toEqual(expectedActions);
    //     done();
    //   });
    // });

    it(`dispatches GET_ERRORS when request fails`, (done) => {
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
        payload:  mock.getErrorsMock
      },
    ];
    const store = mockStore({});
    return store.dispatch(signIn()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

      it(`dispatches SET_CURRENT_USER on signOut`, (done) => {
      const expectedActions = [
        {
          type: SET_CURRENT_USER,
          payload: {}
        },
      ];
      const store = mockStore({});
      store.dispatch(signOut({email: '', password: '1234'}))
      // .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      // });
    });
});