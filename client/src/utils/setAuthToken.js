import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        // Apply token to every request
        axios.defaults.headers.common['Authorization'] = token;
        return 1;
    }else{
        delete axios.defaults.headers.common['Authorization'];
        return 0;
    }
}

export default setAuthToken;