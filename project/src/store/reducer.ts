import { createReducer } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';
import { films } from '../mocks/films';

import { getFilms } from './actions';

const initialState: { currentGenre: string; films: FilmType[]; filmsByGenre: FilmType[] } = {
  currentGenre:'All genres',
  films: [],
  filmsByGenre: []
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getFilms, (state) => {
    state.films = films;
  });
});

export { reducer };
