import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://11.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

export { createAPI };
