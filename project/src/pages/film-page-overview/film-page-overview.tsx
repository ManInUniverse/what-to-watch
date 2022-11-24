import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { FilmType } from '../../types/film-type';
import { RatingDescription } from '../../const';

const rateFilm = (rating: FilmType['rating']) => {
  if (rating < 3) {
    return RatingDescription.Bad;
  }
  if (rating >= 3 && rating < 5) {
    return RatingDescription.Normal;
  }
  if (rating >= 5 && rating < 8) {
    return RatingDescription.Good;
  }
  if (rating >= 8 && rating < 10) {
    return RatingDescription.VeryGood;
  }
  if (rating >= 10) {
    return RatingDescription.Awesome;
  }
};

function FilmPageOverview(): JSX.Element {
  const film = useOutletContext<FilmType>();

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{ film.rating.toFixed(1) }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ rateFilm(film.rating) }</span>
          <span className="film-rating__count">{ `${ film.scoresCount } ratings` }</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{ film.description }</p>

        <p className="film-card__director"><strong>{ `Director: ${ film.director }` }</strong></p>

        <p className="film-card__starring"><strong>{ `Starring: ${ film.starring.join(', ') } and other` }</strong></p>
      </div>
    </React.Fragment>
  );
}

export default FilmPageOverview;
