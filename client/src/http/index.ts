import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:5000/'
});

const interceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config
}

$host.interceptors.request.use(interceptor);

export { $host }