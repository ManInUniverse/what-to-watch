import { createReducer } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { loadFilms, setFilmsDataLoadingStatus } from './actions';

const initialState: {
  isFilmsDataLoading: boolean;
  films: Films;
} = {
  isFilmsDataLoading: false,
  films: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    });
});

export { reducer };
