import { createReducer } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';
import { loadFilms, setFilmsDataLoadingStatus } from './actions';

const initialState: {
  isFilmsDataLoading: boolean;
  films: FilmType[];
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
