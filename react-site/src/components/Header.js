import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = ({ activePage, onNavigate }) => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
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
            <li>
              <a 
                href="#"
                className={activePage === 'home' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'home')}
              >
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activePage === 'about' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'about')}
              >
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activePage === 'cv' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'cv')}
              >
                {t('nav.cv')}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activePage === 'contact' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
