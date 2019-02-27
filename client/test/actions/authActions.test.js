import { signIn, setCurrentUser, signOut } from '../../src/actions/authActions';



describe('authActions', () => {
    it('should set the current user', () => {
        const data = { email: 'ezekiel', password: 1234};
        const response = setCurrentUser(data);
        expect(response.type).toEqual('SET_CURRENT_USER');
        expect(response.payload).toEqual(data);
    });
});