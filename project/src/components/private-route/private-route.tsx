import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  return (
    props.authorizationStatus === AuthorizationStatus.Auth ? props.children : <Navigate to={ AppRoute.SignIn }/>
  );
}

export default PrivateRoute;
