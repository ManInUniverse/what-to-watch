import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/film';

type VideoPlayerFullProps = {
  film: Film;
  onExitButtonClick: () => void;
}

const calculateTimeLeft = (currentTime: number, videoDuration: number) => {
  const timeDifference = videoDuration - currentTime;
  const minutes = Math.trunc(timeDifference / 60);
  const seconds = Math.trunc(timeDifference % 60);
  const hours = Math.trunc(minutes / 60);

  return [
    (`0${ hours }`).slice(-2),
    (`0${ minutes }`).slice(-2),
    (`0${ seconds }`).slice(-2)
  ].join(':');
};

function VideoPlayerFull(props: VideoPlayerFullProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePosition = `${ ((currentTime / videoDuration) * 100) }%`;

  const onVideoLoadedMetaData = () => {
    if (videoRef.current?.duration) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const onVideoTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const onVideoEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    videoRef.current?.addEventListener('loadedmetadata', onVideoLoadedMetaData);
    videoRef.current?.addEventListener('timeupdate', onVideoTimeUpdate);
    videoRef.current?.addEventListener('ended', onVideoEnded);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="player">

      <video
        className="player__video"
        src={ props.film.videoLink }
        poster={ props.film.previewImage }
        ref={ videoRef }
        muted={ false }
      />

      <button onClick={ props.onExitButtonClick } type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={ currentTime } max={ videoDuration }></progress>
            <div className="player__toggler" style={{ left: togglePosition }}>Toggler</div>
          </div>
          <div className="player__time-value">{ calculateTimeLeft(currentTime, videoDuration) }</div>
        </div>

        <div className="player__controls-row">
          <button onClick={ () => { setIsPlaying(!isPlaying); } } type="button" className="player__play">
            {
              isPlaying
                ? <svg viewBox="0 0 14 21" width="14" height="21"><use xlinkHref="#pause"></use></svg>
                : <svg viewBox="0 0 19 19" width="19" height="19"><use xlinkHref="#play-s"></use></svg>
            }
            <span>{ isPlaying ? 'Pause' : 'Play' }</span>
          </button>
          <div className="player__name">{ props.film.name }</div>

          <button onClick={ () => { videoRef.current?.requestFullscreen(); } } type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayerFull;
