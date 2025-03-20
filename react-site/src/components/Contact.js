import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.content')}</p>
      </div>
    </section>
  );
};

export default Contact;
