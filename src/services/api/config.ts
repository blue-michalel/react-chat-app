import axios from 'axios';
import { requestInterceptor } from './interceptors/request';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(requestInterceptor);

export default instance;
