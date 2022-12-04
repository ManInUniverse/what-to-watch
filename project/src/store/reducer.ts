import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/film';
import { UserData } from '../types/user-data';
import { clearUserData, loadFilms, setAuthorizationStatus, setError, setFilmsDataLoadingStatus, setUserData } from './actions';

const initialState: {
  isFilmsDataLoading: boolean;
  films: Films;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
} = {
  isFilmsDataLoading: false,
  films: [],
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null
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
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(clearUserData, (state) => {
      state.userData = null;
    });
});

export { reducer };
