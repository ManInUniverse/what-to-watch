import React from 'react';
import { Link } from 'react-router-dom';
import { FilmType } from '../../types/film-type';

import Catalog from '../../components/catalog/catalog';

type MainPageProps = {
  films: FilmType[];
}

function MainPage(props: MainPageProps): JSX.Element {
  const promoFilm = props.films[0];

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={ promoFilm.backgroundImage } alt={ promoFilm.name } />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link" href="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={ promoFilm.posterImage } alt={ `${ promoFilm.name } poster` } width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{ promoFilm.name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ promoFilm.genre }</span>
                <span className="film-card__year">{ promoFilm.released }</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={ `/player/${ promoFilm.id }` }>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <Catalog films={ props.films } />

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light" href="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainPage;
