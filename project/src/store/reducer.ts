import { createReducer } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { loadFilms, setError, setFilmsDataLoadingStatus } from './actions';

const initialState: {
  isFilmsDataLoading: boolean;
  films: Films;
  error: string | null;
} = {
  isFilmsDataLoading: false,
  films: [],
  error: null
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
    });
});

export { reducer };
