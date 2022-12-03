import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Films } from '../types/film';
import { UserData } from '../types/user-data';

export const loadFilms = createAction<Films>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setError = createAction<string | null>('app/setError');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const setUserData = createAction<UserData>('user/setUserData');

export const clearUserData = createAction('user/clearUserData');

