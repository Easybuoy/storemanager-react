export const signIn = (loginType) => {
    return {
        type: 'SIGN_IN',
        payload: loginType
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
}; 