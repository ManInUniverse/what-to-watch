import { NameSpace } from '../../../const';
import { Film, Films } from '../../../types/film';
import { Reviews } from '../../../types/review';
import { State } from '../../../types/store';

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;

export const getAppDataProcessingStatus = (state: State): boolean => state[NameSpace.Data].isAppDataProcessing;

export const getFilms = (state: State): Films => state[NameSpace.Data].films;

export const getCurrentFilm = (state: State): Film | null => state[NameSpace.Data].currentFilm;

export const getSimilarFilms = (state: State): Films => state[NameSpace.Data].similarFilms;

export const getFavoriteFilms = (state: State): Films => state[NameSpace.Data].favoriteFilms;

export const getComments = (state: State): Reviews => state[NameSpace.Data].comments;
