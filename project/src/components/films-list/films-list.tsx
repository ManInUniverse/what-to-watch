import { PropsWithChildren } from 'react';
import { FilmType } from '../../types/film-type';
import FilmCardSmall from '../film-card-small/film-card-small';

type FilmsListProps = PropsWithChildren<{
  films: FilmType[];
}>;

function FilmsList(props: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      { props.films.map((film) => <FilmCardSmall film={ film } key={ film.id } />) }
    </div>
  );
}

export default FilmsList;
