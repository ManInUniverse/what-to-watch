import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { changeFilmStatusAction, fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/slices/app-data/selectors';
import { getAuthorizationStatus } from '../../store/slices/user-process/selectors';
import { Film } from '../../types/film';

type AddToFavoriteButtonProps = {
  film: Film;
}

function AddToFavoriteButton(props: AddToFavoriteButtonProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const filmStatus = props.film.isFavorite ? 0 : 1;

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [dispatch, filmStatus, authorizationStatus]);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <button
        onClick={ () => {
          dispatch(changeFilmStatusAction({ filmId: props.film.id, status: filmStatus }));
        } }
        className="btn btn--list film-card__button"
        type="button"
      >
        {
          props.film.isFavorite
            ? <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg>
            : <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use></svg>
        }
        <span>My list</span>
        {
          favoriteFilms.length
            ? <span className="film-card__count">{ favoriteFilms.length }</span>
            : null
        }
      </button>
    );
  }

  return (
    <button onClick={ () => { navigate(AppRoute.SignIn); } } className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default AddToFavoriteButton;
