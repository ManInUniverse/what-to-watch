import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';

export const loadFilms = createAction<FilmType[]>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
