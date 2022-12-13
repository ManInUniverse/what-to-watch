import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Film } from '../../types/film';
import { RatingDescription } from '../../const';

const rateFilm = (rating: Film['rating']) => {
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
  const [currentFilm] = useOutletContext<[Film]>();

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{ currentFilm.rating.toFixed(1) }</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ rateFilm(currentFilm.rating) }</span>
          <span className="film-rating__count">{ `${ currentFilm.scoresCount } ratings` }</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{ currentFilm.description }</p>

        <p className="film-card__director"><strong>{ `Director: ${ currentFilm.director }` }</strong></p>

        <p className="film-card__starring"><strong>{ `Starring: ${ currentFilm.starring.join(', ') } and other` }</strong></p>
      </div>
    </React.Fragment>
  );
}

export default FilmPageOverview;
