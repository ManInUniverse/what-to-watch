import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { Films } from '../types/film';
import { AppDispatch, State } from '../types/store';
import { store } from './store';
import { loadFilms, setError, setFilmsDataLoadingStatus } from './actions';

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
    setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
  }
);
