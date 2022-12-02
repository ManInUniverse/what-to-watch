import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/film';
import { loadFilms, setAuthorizationStatus, setError, setFilmsDataLoadingStatus } from './actions';

const initialState: {
  isFilmsDataLoading: boolean;
  films: Films;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
} = {
  isFilmsDataLoading: false,
  films: [],
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
