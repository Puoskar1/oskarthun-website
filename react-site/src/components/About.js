import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <p>{t('about.content')}</p>
      </div>
    </section>
  );
};

export default About;
