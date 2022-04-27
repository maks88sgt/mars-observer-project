import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  initImmediate: false,
  preload: ["en", "ru"],
  debug: true,
  saveMissing: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en,
    ru,
  },
});

export default i18n;
