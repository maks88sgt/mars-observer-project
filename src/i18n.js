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
                    "Common": {
                        "Rovers": "Rovers",
                        "Search": "Search photo",
                        "About": "About",
                        "Profile": "Profile",
                        "Logout": "Logout",
                    },
                    "Rovers": {
                        "Curiosity": {
                            "Name": "Curiosity",
                            "Description": "It's mission began in 2011 and continues now.",
                            "Learn more": "Learn more"
                        },
                        "Opportunity": {
                            "Name": "Opportunity",
                            "Description": "This rover that was active from 2004 until 2018.",
                            "Learn more": "Learn more"
                        },
                        "Spirit": {
                            "Name": "Spirit",
                            "Description": "It's mission lasted from 2004 to 2010",
                            "Learn more": "Learn more"
                        }
                    }
                }
            }, ru: {
                translation: {
                    "Common": {
                        "Rovers": "Марсоходы",
                        "Search": "Поиск фото",
                        "About": "О проекте",
                        "Profile": "Профиль",
                        "Logout": "Выйти"
                    },
                    "Rovers": {
                        Curiosity: {
                            Name: "Curiosity (Любопытство)",
                            "Description": "Его миссия началась в 2011 и продолжается по сей день.",
                            "Learn more": "Узнать больше"
                        },
                        "Opportunity": {
                            "Name": "Opportunity (Возможность)",
                            "Description": "Этот марсоход был активен с 2004 по 2018 год.",
                            "Learn more": "Узнать больше"
                        },
                        "Spirit": {
                            "Name": "Spirit (Дух)",
                            "Description": "Его миссия продлилась с 2004 по 2010 год.",
                            "Learn more": "Узнать больше"
                        }
                    }
                }
            }
        }
    });


export default i18n;
