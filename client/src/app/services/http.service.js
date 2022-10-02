import axios from 'axios';
import configFile from '../config.json';

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

http.interceptors.response.use(
    (res) => {
        res.data = { content: res.data };
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        
        if (!expectedErrors) {
            console.error(error);
            alert('Something was wrong. Try it later');
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get
};

export default httpService;
