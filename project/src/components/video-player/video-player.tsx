import { useEffect, useRef } from 'react';
import { FilmType } from '../../types/film-type';

type VideoPlayerProps = {
  film: FilmType;
  isPlaying: boolean;
  isMuted: boolean;
}

function VideoPlayer(props: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const playVideo = () => {
    if(videoRef.current) {
      videoRef.current.play();
    }
  };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  useEffect(() => {
    if (props.isPlaying) {
      timeoutRef.current = setTimeout(playVideo, 1000);
    } else {
      stopVideo();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
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
