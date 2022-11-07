import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { films } from './mocks/films';
// import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const enum FilmCardPromoFeatures {
  Title = 'The Grand Budapest Hotel',
  Genre = 'Drama',
  ReleaseDate = '2014'
}

root.render(
  <React.StrictMode>
    <App title={ FilmCardPromoFeatures.Title } genre={ FilmCardPromoFeatures.Genre } releaseDate={ FilmCardPromoFeatures.ReleaseDate } films={ films } />
  </React.StrictMode>,
);
