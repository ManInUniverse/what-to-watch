import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Film } from '../../types/film';

const getTimeFromMinutes = (runTime: Film['runTime']) => {
  const hours = Math.trunc(runTime / 60);
  const minutes = runTime % 60;
  return `${ hours }h ${ minutes }m`;
};

function FilmPageDetails(): JSX.Element {
  const film = useOutletContext<Film>();

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{ film.director }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">

            {
              film.starring.map((actor, index, array) => {
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
          <span className="film-card__details-value">{ getTimeFromMinutes(film.runTime) }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{ film.genre }</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{ film.released }</span>
        </p>
      </div>
    </div>
  );
}

export default FilmPageDetails;
