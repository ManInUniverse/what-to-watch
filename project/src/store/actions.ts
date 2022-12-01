import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';

export const loadFilms = createAction<Films>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
