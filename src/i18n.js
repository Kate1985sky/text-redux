import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

const resources = {
    en: {
        translation: {
            "Welcome to React": "add to cart"
        }
    },
    uk: {
        translation: {
            "Welcome to React": "Добавити до картки"
        }
    }
};


i18n
//   .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
   fallbackLng: "en",

    interpolation: {
        escapeValue: false,
        debug: true,
    }
  })
  
  


export default i18n;