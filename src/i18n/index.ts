import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем переводы
import en from './messages/en';
import ru from './messages/ru';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: Localization.getLocales()[0].languageCode || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
