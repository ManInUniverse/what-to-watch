import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, SHOW_ERROR_TIMEOUT } from '../const';
import { Films } from '../types/film';
import { AppDispatch, State } from '../types/store';
import { store } from './store';
import { loadFilms, setAuthorizationStatus, setError, setFilmsDataLoadingStatus } from './actions';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

type AppThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchFilmsAction = createAsyncThunk<void, undefined, AppThunkApiConfig>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const response = await api.get<Films>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(response.data));
  }
);

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), SHOW_ERROR_TIMEOUT);
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, AppThunkApiConfig>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NonAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, AppThunkApiConfig>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const response = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(response.data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, AppThunkApiConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NonAuth));
  },
);
