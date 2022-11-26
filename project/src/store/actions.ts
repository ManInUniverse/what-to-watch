import { createAction } from '@reduxjs/toolkit';

export const getFilms = createAction('getFilms');
export const changeGenre = createAction('changeGenre');
export const getFilmsByGenre = createAction('getFilmsByGenre');

