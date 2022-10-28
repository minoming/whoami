import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const initLanguageCode = "ko";
const resources = {
  en: {
    translation: {
      한국어: "Korean",
      영어: "English",
      미노미: "MINOMI",
      who: "Who?",
      skils: "Skils",
      projects: "Projects"
    },
  },
  ko: {
    translation: {
      한국어: "한국어",
      영어: "영어",
      미노미: "미노미",
      who: "누구?",
      skils: "기술스택",
      projects: "프로젝트"
    },
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lan: initLanguageCode,
  fallbackLng: "ko",
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
