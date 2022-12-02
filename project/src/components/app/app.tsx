import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Reviews } from '../../types/review';
import { useAppSelector } from '../../hooks/useAppSelector';

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

import ScrollReseter from '../scroll-reseter/scroll-reseter';
import PrivateRoute from '../../components/private-route/private-route';

type AppProps = {
  reviews: Reviews;
}

function App(props: AppProps): JSX.Element {
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);
  const films = useAppSelector((state) => state.films);

  if (isFilmsDataLoading) {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>
      <ScrollReseter />

      <Routes>
        <Route
          path={ AppRoute.Main }
          element={ <MainPage films={ films } /> }
        />

        <Route
          path={ AppRoute.SignIn }
          element={ <SignInPage /> }
        />

        <Route
          path={ AppRoute.MyList }
          element={
            <PrivateRoute>
              <MyListPage films={ films } />
            </PrivateRoute>
          }
        />

        <Route path={ AppRoute.Film } element={ <FilmPage films={ films } /> }>
          <Route index element={ <FilmPageOverview /> } />
          <Route path={ `${ AppRoute.Film }/details` } element={ <FilmPageDetails /> } />
          <Route path={ `${ AppRoute.Film }/reviews` } element={ <FilmPageReviews reviews={ props.reviews } /> } />
        </Route>

        <Route
          path={ AppRoute.AddReview }
          element={ <AddReviewPage films={ films } /> }
        />

        <Route
          path={ AppRoute.Player }
          element={ <PlayerPage films={ films } /> }
        />

        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
