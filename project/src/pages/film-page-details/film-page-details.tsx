import React from 'react';
import { FilmType } from '../../types/film-type';
import { useParams } from 'react-router-dom';

import NotFoundPage from '../not-found-page/not-found-page';

type FilmPageDetailsProps = {
  films: FilmType[];
}

const getTimeFromMinutes = (runTime: FilmType['runTime']) => {
  const hours = Math.trunc(runTime / 60);
  const minutes = runTime % 60;
  return `${ hours }h ${ minutes }m`;
};

function FilmPageDetails(props: FilmPageDetailsProps): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const currentFilm = props.films.find((film) => film.id === Number(id));

  if (!currentFilm) {
    return <NotFoundPage />;
  }

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{ currentFilm.director }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">

            {
              currentFilm.starring.map((actor, index, array) => {
                if (index === array.length - 1) {
                  return actor;
                }
                return (
                  <React.Fragment key={ actor }>
                    { `${ actor },` }<br />
                  </React.Fragment>
                );
              })
            }

          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{ getTimeFromMinutes(currentFilm.runTime) }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{ currentFilm.genre }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{ currentFilm.released }</span>
        </p>
      </div>
    </div>
  );
}

export default FilmPageDetails;
