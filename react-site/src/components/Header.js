import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <header className="header">
      <div className="container">
        <h1>Oskar Thun</h1>
        <nav>
          <div className="language-selector">
            <button 
              onClick={() => changeLanguage('en')} 
              className={i18n.language === 'en' ? 'active' : ''}
            >
              English
            </button>
            <button 
              onClick={() => changeLanguage('fi')} 
              className={i18n.language === 'fi' ? 'active' : ''}
            >
              Suomi
            </button>
            <button 
              onClick={() => changeLanguage('sv')} 
              className={i18n.language === 'sv' ? 'active' : ''}
            >
              Svenska
            </button>
          </div>
          <ul>
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#cv">{t('nav.cv')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
