import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        load: 'all',
        preload: ['en', 'ru'],
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    "Rovers": "Rovers",
                    "Search": "Search photo",
                    "About": "About",
                    "Profile": "Profile",
                    "Logout": "Logout"
                }
            }, ru: {
                translation: {
                    "Rovers": "Марсоходы",
                    "Search": "Поиск фото",
                    "About": "О проекте",
                    "Profile": "Профиль",
                    "Logout": "Выйти"
                }

            }
        }
    });


export default i18n;
