import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/routers';

export const Header = (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link header__logo-link--active" to={AppRoutes.Default}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <a className="header__nav-link header__nav-link--profile" href="#">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">3</span>
              </a>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={AppRoutes.Login}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
