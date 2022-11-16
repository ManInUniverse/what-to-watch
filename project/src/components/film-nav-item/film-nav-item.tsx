import { PropsWithChildren } from 'react';
import { Link, To, useLocation } from 'react-router-dom';

import './film-nav-item.css';

type FilmNavItemProps = PropsWithChildren<{
  to: To;
}>

function FilmNavItem(props: FilmNavItemProps): JSX.Element {
  const location = useLocation();
  const match = location.pathname === props.to;

  return (
    <li className={ `film-nav__item${ match ? ' film-nav__item--active' : '' }` }>
      <Link className="film-nav__link" to={ props.to }>{ props.children }</Link>
    </li>
  );
}

export default FilmNavItem;
