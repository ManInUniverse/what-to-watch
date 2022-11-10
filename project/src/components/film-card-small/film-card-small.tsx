import { Link } from 'react-router-dom';
import { FilmType } from '../../types/film-type';

type FilmCardSmallProps = {
  film: FilmType;
  onFilmCardMouseEnter: () => void;
}

function FilmCardSmall(props: FilmCardSmallProps): JSX.Element {
  return (
    <article onMouseEnter={ props.onFilmCardMouseEnter } className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={ props.film.previewImage } alt={ props.film.name } width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={ `/films/${ props.film.id }` }>{ props.film.name }</Link>
      </h3>
    </article>
  );
}

export default FilmCardSmall;
