import { useEffect, useRef } from 'react';
import { FilmType } from '../../types/film-type';

type VideoPlayerProps = {
  film: FilmType;
  isPlaying: boolean;
  isMuted: boolean;
}

function VideoPlayer(props: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const stopVideo = () => {
    videoRef.current?.load();
  };

  useEffect(() => {
    let playTimeout: ReturnType<typeof setTimeout> | null = null;

    if (props.isPlaying) {
      playTimeout = setTimeout(playVideo, 1000);
    } else {
      stopVideo();
    }

    return () => {
      if (playTimeout) {
        clearTimeout(playTimeout);
      }
    };
  }, [props.isPlaying]);

  return (
    <video
      className="player__video"
      src={ props.film.previewVideoLink }
      poster={ props.film.previewImage }
      ref={ videoRef }
      muted={ props.isMuted }
    />
  );
}

export default VideoPlayer;
