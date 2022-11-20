import { useEffect, useRef, useState } from 'react';
import { FilmType } from '../../types/film-type';

type VideoPlayerProps = {
  film: FilmType;
  isPlaying: boolean;
  isMuted: boolean;
}

function VideoPlayer(props: VideoPlayerProps) {
  const [, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (props.isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();

    return () => {
      isVideoPlayerMounted = false;
    };

  }, [props.isPlaying]);

  return (
    <video
      className="player__video"
      src={ props.film.videoLink }
      poster={ props.film.previewImage }
      ref={ videoRef }
      muted={ props.isMuted }
    />
  );
}

export default VideoPlayer;
