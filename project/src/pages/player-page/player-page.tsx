import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCurrentFilm, getErrorStatus } from '../../store/slices/app-data/selectors';
import { fetchCurrentFilmAction } from '../../store/api-actions';

import ErrorPage from '../error-page/error-page';
import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';
import VideoPlayerFull from '../../components/video-player-full/video-player-full';

function PlayerPage(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const currentFilmId = Number(id);

  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector(getCurrentFilm);
  const hasError = useAppSelector(getErrorStatus);

  useEffect(() => {
    if (currentFilmId) {
      dispatch(fetchCurrentFilmAction({ filmId: currentFilmId }));
    }
  }, [dispatch, currentFilmId]);

  if (!currentFilmId) {
    return <NotFoundPage />;
  }

  if (currentFilm === null) {
    return <LoadingPage />;
  }

  if (hasError) {
    return <ErrorPage />;
  }

  return (
    <VideoPlayerFull
      film={ currentFilm }
      onExitButtonClick={ () => { navigate(`/films/${ currentFilm.id }`); } }
    />
  );
}

export default PlayerPage;
