import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { Film, Films, FilmStatus } from '../types/film';
import { NewReview, Reviews } from '../types/review';
import { AppDispatch, State } from '../types/store';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { redirectToRoute } from './actions';

type AppThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchFilmsDataAction = createAsyncThunk<Films, undefined, AppThunkApiConfig>(
  'data/fetchFilmsData',
  async (_arg, { extra: api }) => {
    const response = await api.get<Films>(APIRoute.Films);
    return response.data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, AppThunkApiConfig>(
  'data/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const response = await api.get<Film>(APIRoute.Promo);
    return response.data;
  }
);

export const fetchCurrentFilmAction = createAsyncThunk<Film, { filmId: Film['id'] }, AppThunkApiConfig>(
  'data/fetchCurrentFilm',
  async ({ filmId }, { extra: api }) => {
    const response = await api.get<Film>(`${ APIRoute.Films }/${ filmId }`);
    return response.data;
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, { filmId: Film['id'] }, AppThunkApiConfig>(
  'data/fetchSimilarFilms',
  async ({ filmId }, { extra: api }) => {
    const response = await api.get<Films>(`${ APIRoute.Films }/${ filmId }/similar`);
    return response.data;
  }
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, AppThunkApiConfig>(
  'data/fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const response = await api.get<Films>(APIRoute.Favorite);
    return response.data;
  }
);

export const changeFilmStatusAction = createAsyncThunk<Film, { filmId: Film['id']; status: FilmStatus }, AppThunkApiConfig>(
  'data/changeFilmStatus',
  async ({ filmId, status }, { extra: api }) => {
    const response = await api.post<Film>(`${ APIRoute.Favorite }/${ filmId }/${ status }`);
    return response.data;
  }
);

export const fetchCommentsAction = createAsyncThunk<Reviews, { filmId: Film['id'] }, AppThunkApiConfig>(
  'data/fetchComments',
  async ({ filmId }, { extra: api }) => {
    const response = await api.get<Reviews>(`${ APIRoute.Comments }/${ filmId }`);
    return response.data;
  }
);

export const addNewCommentAction = createAsyncThunk<Reviews, { filmId: Film['id']; commentData: NewReview }, AppThunkApiConfig>(
  'data/addNewComment',
  async ({ filmId, commentData }, { dispatch, extra: api }) => {
    const response = await api.post<Reviews>(`${ APIRoute.Comments }/${ filmId }`, commentData);
    dispatch(redirectToRoute(`/films/${ filmId }/reviews`));
    return response.data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, AppThunkApiConfig>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<UserData>(APIRoute.Login);
    return response.data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, AppThunkApiConfig>(
  'user/login',
  async (authData, { dispatch, extra: api }) => {
    const response = await api.post<UserData>(APIRoute.Login, authData);
    saveToken(response.data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return response.data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, AppThunkApiConfig>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
