import { useState } from 'react';
import { Film, Films } from '../../types/film';

import FilmsList from '../films-list/films-list';
import ShowMoreButton from '../show-more-button/show-more-button';

import './catalog.css';

type CatalogProps = {
  films: Films;
}

const FILMS_COUNT_PER_STEP = 8;
const DEFAULT_GENRE = 'All genres';

const getGenresList = (films: Films) => {
  const genresList = new Set([DEFAULT_GENRE]);
  films.forEach((film) => genresList.add(film.genre));

  return Array.from(genresList);
};

const getFilmsByGenre = (films: Films, genre: Film['genre']) => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};

function Catalog(props: CatalogProps): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE);
  const [shownFilmsCount, setShownFilmsCount] = useState(FILMS_COUNT_PER_STEP);

  const genresList = getGenresList(props.films);
  const filmsByGenre = getFilmsByGenre(props.films, activeGenre);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">

        { genresList.map((genre) => (
          <li className={ `catalog__genres-item ${ genre === activeGenre ? 'catalog__genres-item--active' : '' }` } key={ genre }>
            <a
              onClick={ (evt) => {
                evt.preventDefault();
                setActiveGenre(genre);
                setShownFilmsCount(FILMS_COUNT_PER_STEP);
              } }
              href="/"
              className="catalog__genres-link"
            >{ genre }
            </a>
          </li>
        )) }

      </ul>

      <FilmsList films={ filmsByGenre.slice(0, shownFilmsCount) } />

      { (shownFilmsCount < filmsByGenre.length) && <ShowMoreButton onButtonClick={ () => setShownFilmsCount(shownFilmsCount + FILMS_COUNT_PER_STEP) } /> }

    </section>
  );
}

export default Catalog;
