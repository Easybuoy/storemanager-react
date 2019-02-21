import setAuthToken from '../../src/utils/setAuthToken';

describe('setAuthToken', () => {
    it('should return 1 if authorization headers is removed', () => {
        const data = 'haskdhk@KJhjkdahjhdakdjhajkhdkajh3498219f7dsf';
        const response = setAuthToken(data);
        expect(response).toEqual(1);
    });

    it('should return 0 if authorization headers is removed', () => {
        const response = setAuthToken();
        expect(response).toEqual(0);
    });
});