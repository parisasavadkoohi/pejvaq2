import axios from 'axios';

axios.defaults.baseURL = 'https://back.pejvaq.com';
axios.defaults.timeout = 10000; // 10 seconds
axios.defaults.headers.common['Accept'] = 'application/json';
