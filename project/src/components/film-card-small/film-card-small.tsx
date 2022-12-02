import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardSmallProps = {
  film: Film;
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
      <Link className="small-film-card__link" to={ `/films/${ props.film.id }` }>
        <div className="small-film-card__image">

          <VideoPlayer
            film={ props.film }
            isPlaying={ props.isVideoPlaying }
            isMuted
          />

        </div>
        <h3 className="small-film-card__title">{ props.film.name }</h3>
      </Link>
    </article>
  );
}

export default FilmCardSmall;
