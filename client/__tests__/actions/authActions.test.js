import { signIn, setCurrentUser, signOut } from '../../src/actions/authActions';
import { GET_ERRORS } from '../../src/actions/types';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';


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
        expect(response.type).toEqual('SET_CURRENT_USER');
        expect(response.payload).toEqual(data);
    });

    it(`dispatches SET_SALES_REQUEST and
  SET_SALES_ERROR when fetching sales fail`, (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {data: {email: 'Wrong email', password: 'Wrong password'}},
      });
    });
    const expectedActions = [
      {
        type: GET_ERRORS,
        payload:  {email: 'Wrong email', password: 'Wrong password'}
      },
    ];
    const store = mockStore({});
    return store.dispatch(signIn({email: 'sad', password: '12344'})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});