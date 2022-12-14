import React, { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchCommentsAction, fetchCurrentFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { getComments, getCurrentFilm, getErrorStatus, getSimilarFilms } from '../../store/slices/app-data/selectors';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthorizationStatus } from '../../store/slices/user-process/selectors';

import ErrorPage from '../error-page/error-page';
import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';
import AddToFavoriteButton from '../../components/add-to-favorite-button/add-to-favorite-button';
import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';
import FilmNavItem from '../../components/film-nav-item/film-nav-item';

const SIMILAR_FILMS_COUNT = 4;

function FilmPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const currentFilmId = Number(id);

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentFilm = useAppSelector(getCurrentFilm);
  const comments = useAppSelector(getComments);
  const similarFilms = useAppSelector(getSimilarFilms);
  const hasError = useAppSelector(getErrorStatus);

  useEffect(() => {
    if (currentFilmId) {
      dispatch(fetchCurrentFilmAction({ filmId: currentFilmId }));
      dispatch(fetchCommentsAction({ filmId: currentFilmId }));
      dispatch(fetchSimilarFilmsAction({ filmId: currentFilmId }));
    }
  }, [dispatch, currentFilmId]);

  if (!currentFilmId) {
    return <NotFoundPage />;
  }

  if (currentFilm === null) {
    return <LoadingPage />;
  }

  if (hasError) {
    return <ErrorPage />;
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full" style={ { 'backgroundColor': currentFilm.backgroundColor } }>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={ currentFilm.backgroundImage } alt={ currentFilm.name } />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link className="logo__link" to={ AppRoute.Main }>
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{ currentFilm.name }</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ currentFilm.genre }</span>
                <span className="film-card__year">{ currentFilm.released }</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={ `/player/${ currentFilm.id }` }>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <AddToFavoriteButton film={ currentFilm } />
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ? <Link className="btn film-card__button" to={ `/films/${ currentFilm.id }/review` }>Add review</Link>
                    : null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={ currentFilm.posterImage } alt={ `${ currentFilm.name } poster` } width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <FilmNavItem to={ `/films/${ currentFilm.id }` }>Overview</FilmNavItem>
                  <FilmNavItem to={ `/films/${ currentFilm.id }/details` }>Details</FilmNavItem>
                  <FilmNavItem to={ `/films/${ currentFilm.id }/reviews` }>Reviews</FilmNavItem>
                </ul>
              </nav>

              <Outlet context={ [currentFilm, comments] } />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={ similarFilms.slice(0, SIMILAR_FILMS_COUNT) } />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link className="logo__link logo__link--light" to={ AppRoute.Main }>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default FilmPage;
