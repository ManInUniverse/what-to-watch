import { createReducer } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';
import { films } from '../mocks/films';

import { loadFilms } from './actions';

const initialState: { films: FilmType[] } = {
  films: []
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state) => {
    state.films = films;
  });
});

export { reducer };
