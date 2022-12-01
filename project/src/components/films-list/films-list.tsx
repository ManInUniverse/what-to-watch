import { PropsWithChildren, useState } from 'react';
import { Film, Films } from '../../types/film';

import FilmCardSmall from '../film-card-small/film-card-small';

type FilmsListProps = PropsWithChildren<{
  films: Films;
}>;

function FilmsList(props: FilmsListProps): JSX.Element {

  const [activeFilmCard, setActiveFilmCard] = useState<Film['id'] | null>(null);

  return (
    <div className="catalog__films-list">
      {
        props.films.map((film) => (
          <FilmCardSmall
            film={ film }
            key={ film.id }
            onFilmCardPointerEnter={ () => setActiveFilmCard( film.id ) }
            onFilmCardPointerLeave={ () => setActiveFilmCard( null ) }
            isVideoPlaying={ activeFilmCard === film.id }
          />
        ))
      }
    </div>
  );
}

export default FilmsList;
