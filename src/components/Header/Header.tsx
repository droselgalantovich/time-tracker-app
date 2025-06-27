import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/Header/LogoHeader.png';
import Menu from '../../assets/Header/BurgerMenu.png';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isTimeActive =
    location.pathname === '/' ||
    (location.pathname.includes('/projects/') && location.pathname.includes('/time'));
  
  const isProjectsActive = 
    location.pathname === '/projects' ||
    (location.pathname.includes('/projects') && !location.pathname.includes('/time'));

  return (
    <header className={styles.mobileHeader}>
      {/* Мобильный контент */}
      <div className={styles.containerMobile}>
        <img src={Logo} alt="logo" />
        <div className={styles.menuMobile} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={Menu} alt="menu" />
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.menuContent}>
          <nav>
            <ul>
              {' '}
              <li>
                <NavLink to="/" className={isTimeActive ? styles.activeLink : ''}>
                  Time
                </NavLink>
              </li>              <li>
                <NavLink
                  to="/projects"
                  className={isProjectsActive ? styles.activeLink : ''}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clients"
                  className={({ isActive }) => (isActive ? styles.activeLink : '')}
                >
                  Clients
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  className={({ isActive }) => (isActive ? styles.activeLink : '')}
                >
                  SignOut
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

const DesktopHeader = () => {
  const location = useLocation();
  const isTimeActive =
    location.pathname === '/' ||
    (location.pathname.includes('/projects/') && location.pathname.includes('/time'));
  
  const isProjectsActive = 
    location.pathname === '/projects' ||
    (location.pathname.includes('/projects') && !location.pathname.includes('/time'));

  return (
    <header className={styles.desktopHeader}>
      {/* Десктопный контент */}
      <div className={styles.containerDesktop}>
        <div className={styles.headerLeft}>
          {' '}
          <nav className={styles.desktopNav}>
            <img src={Logo} alt="logo" />{' '}
            <NavLink to="/" className={isTimeActive ? styles.activeLink : ''}>
              Time
            </NavLink>            <NavLink
              to="/projects"
              className={isProjectsActive ? styles.activeLink : ''}
            >
              Projects
            </NavLink>
            <NavLink
              to="/clients"
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Clients
            </NavLink>
          </nav>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.googleIcon}></div>
        </div>
      </div>
    </header>
  );
};

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
};

export default Header;
