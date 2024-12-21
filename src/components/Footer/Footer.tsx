/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';

import Main_logo from '../Header/tomato.png';
import Top_icon from './stroke.svg';

import styles from './Footer.module.scss';
import { Link, NavLink } from 'react-router-dom';

export const Footer: FC = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footer__icon}>
          <Link to="/" className={styles['footer__icon-main']}>
            <img
              src={Main_logo}
              alt="Main-logo"
              className={styles.footer__image}
            />
          </Link>
        </div>

        <div className={styles.footer__information}>
          <span>
            <NavLink
              to={'https://github.com/KrivorotkoYurii'}
              className={styles.footer__link}
            >
              Github
            </NavLink>
          </span>
        </div>
        <div className={styles['footer__back-to-top']}>
          Go to top
          <button className={styles['footer__top-icon']} onClick={scrollToTop}>
            <img src={Top_icon} alt="Top_icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};
