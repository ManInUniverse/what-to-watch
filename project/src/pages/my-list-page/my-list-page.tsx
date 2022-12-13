import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getFavoriteFilms } from '../../store/slices/app-data/selectors';

import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';

function MyListPage(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link className="logo__link" to={ AppRoute.Main }>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">
          My list
          {
            favoriteFilms.length
              ? <span className="user-page__film-count">{ favoriteFilms.length }</span>
              : null
          }
        </h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={ favoriteFilms }/>
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
  );
}

export default MyListPage;
