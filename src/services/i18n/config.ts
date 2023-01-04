import i18next, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import dotenvLang from './dotenvLng';
import en from './dict/en';
import pl from './dict/pl';

const languageDetector = new LanguageDetector();
languageDetector.addDetector(dotenvLang);

export type Locales = 'en' | 'pl';

const resources: Record<Locales, ResourceLanguage> = {
  en,
  pl,
};

const detection = {
  order: ['localStorage', 'dotenv'],
  caches: ['localStorage'],
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection,
    fallbackLng: 'en',
    defaultNS: 'common',
    fallbackNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
