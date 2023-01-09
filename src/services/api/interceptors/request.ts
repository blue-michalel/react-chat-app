import { AxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: AxiosRequestConfig) => {
  //@ts-ignore
  config.headers[
    'Authorization'
  ] = `Bearer ${process.env.REACT_APP_DAILY_API_KEY_PLACEHOLDER}`;

  return config;
};
