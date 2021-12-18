import axios from 'axios';

const appApi = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 30000,
});

export default {appApi};
