export default {
    getErrorsMock: { email: 'Wrong email', password: 'Wrong password' },
    setCurrentUserMock: { token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNlMjZmNDExLTQ1ZjQtNDBiOC04MDE4LTA5OWM5OWE4OWFhMSIsInVzZXJJbWFnZSI6ImFzc2V0cy91cGxvYWRzL3VzZXJzL2RlZmF1bHQtYXZhdGFyLnBuZyIsInR5cGUiOjEsImlhdCI6MTU1Mzg5NTc3NCwiZXhwIjoxNTUzODk5Mzc0fQ.rwxUYQcuR7VfTPNzeRp43u_61Vo-HMOHQrcvuTi_i5M' },
    getProductsMock: [{ name: 'Samsung', quantity: 1234, price: 1000 }],
    getProductByIdMock: { name: 'Samsung', quantity: 1234, price: 1000 },
    deleteProductMock: { message: 'Product deleted successfully' },
    deleteAttendantMock: { message: 'Attendant deleted successfully' },
    createAttendantMock: { message: 'Attendant created successfully' },
    viewAttendantsMock: [{name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', password: '123456', type: 1}],
    viewSalesMock: [{name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', password: '123456', type: 1}],
    viewProfileMock: { name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', type: 1, status: 1},
    getNetworkErrorMock: { message: 'Network Error' }
}