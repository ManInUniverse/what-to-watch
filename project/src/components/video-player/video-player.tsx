import { FilmType } from '../../types/film-type';

type VideoPlayerProps = {
  film: FilmType;
}

function VideoPlayer(props: VideoPlayerProps) {
  return (
    <video src={ props.film.videoLink } className="player__video" poster={ props.film.previewImage }></video>
  );
}

export default VideoPlayer;
