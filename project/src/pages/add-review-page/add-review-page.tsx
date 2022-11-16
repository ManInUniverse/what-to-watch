import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmType } from '../../types/film-type';

import NotFoundPage from '../not-found-page/not-found-page';
import AddReviewForm from '../../components/add-review-form/add-review-form';

type AddReviewPageProps = {
  films: FilmType[];
}

function AddReviewPage(props: AddReviewPageProps): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const currentFilm = props.films.find((film) => film.id === Number(id));

  if (!currentFilm) {
    return (
      <NotFoundPage />
    );
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

        <div className="film-card__poster film-card__poster--small">
          <img src={ currentFilm.posterImage } alt={ `${ currentFilm.name } poster` } width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
}

export default AddReviewPage;
