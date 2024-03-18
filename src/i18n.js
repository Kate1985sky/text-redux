import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {LOCALS}  from "./constants/languages.js";
import {uk} from "./translation/uk.js";
import {en} from "./translation/en.js";

const resources = {
  [LOCALS.EN]: {
    translation: en
  },
  [LOCALS.UK]: {
    translation: uk
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector) 
  .init({
    resources,
    fallbackLng: LOCALS.UK, 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
