import { Link } from 'react-router-dom';
import { FilmType } from '../../types/film-type';
import VideoPlayer from '../video-player/video-player';

type FilmCardSmallProps = {
  film: FilmType;
  isVideoPlaying: boolean;
  onFilmCardPointerEnter: () => void;
  onFilmCardPointerLeave: () => void;
}

function FilmCardSmall(props: FilmCardSmallProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onPointerEnter={ props.onFilmCardPointerEnter }
      onPointerLeave={ props.onFilmCardPointerLeave }
    >
      <div className="small-film-card__image">

        {
          props.isVideoPlaying
            ? <VideoPlayer film={ props.film } isPlaying isMuted />
            : <img src={ props.film.previewImage } alt={ props.film.name } width="280" height="175" />
        }

      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={ `/films/${ props.film.id }` }>{ props.film.name }</Link>
      </h3>
    </article>
  );
}

export default FilmCardSmall;
