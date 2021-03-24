import i18n from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import translationEN from "./translations/translation-en.json";
import translationPL from "./translations/translation-en.json";

const resources = {
    en: {translation: translationEN},
    pl: {translation: translationPL},
};

i18n
.use(LngDetector)
.use(initReactI18next)
.init({
    detection: {
        // order and from where user language should be detected
        order: [/*'path', 'localStorage',*/ 'cookie', 'navigator', 'htmlTag'],

        // keys or params to lookup language from
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        lookupFromPathIndex: 0,

        // cache user language on
        caches: ['localStorage', 'cookie'],

        // optional expire and domain for set cookie
        cookieMinutes: 10,
        cookieDomain: '.stunn.me',

    },
    load: 'languageOnly',
    fallbackLng: ['en', 'pl'],
    supportedLngs: ['en', 'pl'],
    //lng:"en",
    resources,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

export default i18n;
