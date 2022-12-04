import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            { userData && <img src={ userData.avatarUrl } alt="User avatar" width="63" height="63" /> }
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" href="/" onClick={ (evt) => { evt.preventDefault(); dispatch(logoutAction()); } }>Sign out</a>
        </li>
      </ul>
    );
  }

  return (
    <div className="user-block">
      <Link to={ AppRoute.SignIn } className="user-block__link">Sign in</Link>
    </div>
  );
}

export default UserBlock;
