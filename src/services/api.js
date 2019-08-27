import axios from 'axios';

const api = axios.create({
    baseURL:'https://ominin3n0-backend.herokuapp.com'
});

export default api;