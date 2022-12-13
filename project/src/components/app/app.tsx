import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { browserHistory } from '../../browser-history';
import { getFilmsDataLoadingStatus, getErrorStatus } from '../../store/slices/app-data/selectors';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/slices/user-process/selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';

import AddReviewPage from '../../pages/add-review-page/add-review-page';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import FilmPage from '../../pages/film-page/film-page';
import FilmPageOverview from '../../pages/film-page-overview/film-page-overview';
import FilmPageDetails from '../../pages/film-page-details/film-page-details';
import FilmPageReviews from '../../pages/film-page-reviews/film-page-reviews';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-router/history-router';
import ScrollReseter from '../scroll-reseter/scroll-reseter';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [dispatch, authorizationStatus]);

  if (!isAuthChecked || isFilmsDataLoading) {
    return (
      <LoadingPage />
    );
  }

  if (hasError) {
    return (
      <ErrorPage />
    );
  }

  return (
    <HistoryRouter history={ browserHistory }>
      <ScrollReseter />

      <Routes>
        <Route
          path={ AppRoute.Main }
          element={ <MainPage /> }
        />

        <Route
          path={ AppRoute.SignIn }
          element={ <SignInPage /> }
        />

        <Route
          path={ AppRoute.MyList }
          element={
            <PrivateRoute authorizationStatus={ authorizationStatus }>
              <MyListPage />
            </PrivateRoute>
          }
        />

        <Route path={ AppRoute.Film } element={ <FilmPage /> }>
          <Route index element={ <FilmPageOverview /> } />
          <Route path={ `${ AppRoute.Film }/details` } element={ <FilmPageDetails /> } />
          <Route path={ `${ AppRoute.Film }/reviews` } element={ <FilmPageReviews /> } />
        </Route>

        <Route
          path={ AppRoute.AddReview }
          element={
            <PrivateRoute authorizationStatus={ authorizationStatus }>
              <AddReviewPage />
            </PrivateRoute>
          }
        />

        <Route
          path={ AppRoute.Player }
          element={ <PlayerPage /> }
        />

        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
