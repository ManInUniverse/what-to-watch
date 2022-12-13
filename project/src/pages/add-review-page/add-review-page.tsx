import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCurrentFilm, getErrorStatus } from '../../store/slices/app-data/selectors';
import { fetchCurrentFilmAction } from '../../store/api-actions';

import NotFoundPage from '../not-found-page/not-found-page';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import UserBlock from '../../components/user-block/user-block';
import ErrorPage from '../error-page/error-page';
import LoadingPage from '../loading-page/loading-page';

function AddReviewPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const currentFilmId = Number(id);

  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector(getCurrentFilm);
  const hasError = useAppSelector(getErrorStatus);

  useEffect(() => {
    if (currentFilmId) {
      dispatch(fetchCurrentFilmAction({ filmId: currentFilmId }));
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
    <section className="film-card film-card--full" style={ { 'backgroundColor': currentFilm.backgroundColor } }>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={ currentFilm.backgroundImage } alt={ currentFilm.name } />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link className="logo__link" to={ AppRoute.Main }>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={ `/films/${ currentFilm.id }` }>
                  { currentFilm.name }
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="#" style={ { 'pointerEvents': 'none', 'cursor': 'default' } }>
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={ currentFilm.posterImage } alt={ `${ currentFilm.name } poster` } width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm film={ currentFilm } />
      </div>
    </section>
  );
}

export default AddReviewPage;
