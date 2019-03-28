export default {
    getErrorsMock: { email: 'Wrong email', password: 'Wrong password' },
    setCurrentUserMock: { },
    getProductsMock: [{ name: 'Samsung', quantity: 1234, price: 1000 }],
    deleteProductMock: { message: 'Product deleted successfully' },
    deleteAttendantMock: { message: 'Attendant deleted successfully' },
    createAttendantMock: { message: 'Attendant created successfully' },
    viewAttendantsMock: [{name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', password: '123456', type: 1}],
    viewSalesMock: [{name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', password: '123456', type: 1}],
    viewProfileMock: { name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', type: 1, status: 1},
    getNetworkErrorMock: { message: 'Network Error' }
}