import React from 'react';
import { useTranslation } from 'react-i18next';
import './CV.css';

const CV = () => {
  const { t } = useTranslation();
  
  return (
    <section id="cv" className="section">
      <div className="container">
        <h2>{t('cv.title')}</h2>
        
        <div className="cv-section">
          <h3>{t('cv.personal.title')}</h3>
          <p><strong>{t('cv.personal.name')}:</strong> Oskar Thun</p>
          <p><strong>{t('cv.personal.address')}:</strong> Pirttikari 20, 23500 Uusikaupunki</p>
          <p><strong>{t('cv.personal.email')}:</strong> oskar@oskarthun.xyz</p>
        </div>
        
        <div className="cv-section">
          <h3>{t('cv.education.title')}</h3>
          <div className="cv-item">
            <p><strong>2018-2022</strong></p>
            <p>{t('cv.education.degree')}</p>
          </div>
        </div>
        
        <div className="cv-section">
          <h3>{t('cv.experience.title')}</h3>
          <div className="cv-item">
            <p><strong>2022-Present</strong></p>
            <p>{t('cv.experience.job1')}</p>
          </div>
          <div className="cv-item">
            <p><strong>2020-2022</strong></p>
            <p>{t('cv.experience.job2')}</p>
          </div>
        </div>
        
        <div className="cv-section">
          <h3>{t('cv.skills.title')}</h3>
          <ul>
            <li>{t('cv.skills.skill1')}</li>
            <li>{t('cv.skills.skill2')}</li>
            <li>{t('cv.skills.skill3')}</li>
            <li>{t('cv.skills.skill4')}</li>
          </ul>
        </div>
        
        <div className="cv-section">
          <h3>{t('cv.languages.title')}</h3>
          <ul>
            <li>{t('cv.languages.lang1')}</li>
            <li>{t('cv.languages.lang2')}</li>
            <li>{t('cv.languages.lang3')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CV;
