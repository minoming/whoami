import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import localeEN from "./en.json";
import localeKO from "./ko.json";

const initLanguageCode = "en";
const resources = {
  en: {
    translation: localeEN,
  },
  ko: {
    translation: localeKO
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lan: initLanguageCode,
  fallbackLng: "en",
  keySeparator: ".",
  interpolation: { escapeValue: false },
});

function I18n(code) {
  const { t } = useTranslation();

  return t(code);
}

function changeLocale(localeCode) {
  i18n.changeLanguage(localeCode);
}

export { I18n, changeLocale };
