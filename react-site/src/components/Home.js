import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="section">
      <div className="container">
        <h2>{t('home.welcome')}</h2>
        <p>{t('home.intro')}</p>
      </div>
    </section>
  );
};

export default Home;
