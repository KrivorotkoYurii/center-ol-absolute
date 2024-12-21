import React from 'react';
import './styles/main.scss';
import styles from './styles/App.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <section className={styles.container}>
      <Header />

      <div className={styles.outletWrapper}>
        <Outlet />
      </div>

      <Footer />
    </section>
  );
};
