import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCurrentFilm, getFilms } from '../../store/slices/app-data/selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchPromoFilmAction } from '../../store/api-actions';

import Catalog from '../../components/catalog/catalog';
import UserBlock from '../../components/user-block/user-block';
import LoadingPage from '../loading-page/loading-page';
import AddToFavoriteButton from '../../components/add-to-favorite-button/add-to-favorite-button';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(getCurrentFilm);
  const films = useAppSelector(getFilms);

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  if (promoFilm === null) {
    return <LoadingPage />;
  }

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

          <UserBlock />
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
                <AddToFavoriteButton film={ promoFilm } />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <Catalog films={ films } />

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
