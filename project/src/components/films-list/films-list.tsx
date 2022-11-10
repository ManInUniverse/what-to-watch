import { PropsWithChildren, useState } from 'react';
import { FilmType } from '../../types/film-type';
import FilmCardSmall from '../film-card-small/film-card-small';

type FilmsListProps = PropsWithChildren<{
  films: FilmType[];
}>;

function FilmsList(props: FilmsListProps): JSX.Element {

  const [, setActiveFilmCard] = useState(0);

  return (
    <div className="catalog__films-list">
      {
        props.films.map((film) => (
          <FilmCardSmall
            film={ film }
            key={ film.id }
            onFilmCardMouseEnter={ () => setActiveFilmCard( film.id ) }
          />
        ))
      }
    </div>
  );
}

export default FilmsList;
