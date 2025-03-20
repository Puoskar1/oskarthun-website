import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslation from './locales/en.json';
import fiTranslation from './locales/fi.json';
import svTranslation from './locales/sv.json';

const resources = {
  en: {
    translation: enTranslation
  },
  fi: {
    translation: fiTranslation
  },
  sv: {
    translation: svTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
