import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';

import AddReviewPage from '../../pages/add-review-page/add-review-page';
import FilmPage from '../../pages/film-page/film-page';
import MainPage from '../../pages/main-page/main-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';

import PrivateRoute from '../../components/private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  releaseDate: string;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ AppRoute.Main }
          element={ <MainPage title={ props.title } genre={ props.genre } releaseDate={ props.releaseDate }/> }
        />
        <Route
          path={ AppRoute.SignIn }
          element={ <SignInPage /> }
        />
        <Route
          path={ AppRoute.MyList }
          element={
            <PrivateRoute authorizationStatus={ AuthorizationStatus.NonAuth }>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={ AppRoute.Film }
          element={ <FilmPage /> }
        />
        <Route
          path={ AppRoute.AddReview }
          element={ <AddReviewPage /> }
        />
        <Route
          path={ AppRoute.Player }
          element={ <PlayerPage /> }
        />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
