import { AuthorizationStatus } from '../const';
import { store } from '../store/store';
import { Film, Films } from './film';
import { Reviews } from './review';
import { UserData } from './user-data';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  isUserProcessing: boolean;
};

export type AppData = {
  hasError: boolean;
  isFilmsDataLoading: boolean;
  isAppDataProcessing: boolean;
  films: Films;
  currentFilm: Film | null;
  similarFilms: Films;
  favoriteFilms: Films;
  comments: Reviews;
};
