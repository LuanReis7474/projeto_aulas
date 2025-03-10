import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.explicae.com',
    timeout: 5000
});

export default api;