import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { handleError } from './error-handler';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BASE_URL = 'https://11.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        handleError(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};

export { createAPI };
