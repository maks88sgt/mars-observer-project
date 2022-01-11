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
                        "Demo": "Demo mode"
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
                    },
                    Login: {
                        "Name": "Name",
                        "ApiKey": "API key",
                        "Save": "Save authorization data and use it in the future.",
                        "Login": "Login",
                        "ApiKey Info": "This application makes requests to NASA's open API during its operation. " +
                            "To authorize users, a special key is required, which you can get at ",
                        "DemoKey Info":
                            "If for some reason you do not want to register, then you still can use this application, " +
                            "however, the API has a limit on the number of requests and you can only make 25 requests from one IP " +
                            "address per day. You can check the number of remaining requests on the profile page."
                    },
                    "Search": {
                        "End": "End date",
                        "Start": "Start date",
                        "Camera": "Camera",
                        "Search": "Search",
                        "FHAZ": "Front Hazard Avoidance Camera",
                        "RHAZ": "Rear Hazard Avoidance Camera",
                        "MAST": "Mast Camera",
                        "CHEMCAM": "Chemistry and Camera Complex",
                        "MAHLI": "Mars Hand Lens Imager",
                        "MARDI": "Mars Descent Imager",
                        "NAVCAM": "Navigation Camera",
                        "PANCAM": "Panoramic Camera",
                        "MINITES": "Miniature Thermal Emission Spectrometer (Mini-TES)"
                    }
                }
            }, ru: {
                translation: {
                    "Common": {
                        "Rovers": "Марсоходы",
                        "Search": "Поиск фото",
                        "About": "О проекте",
                        "Profile": "Профиль",
                        "Logout": "Выйти",
                        "Demo": "Демо режим"
                    },
                    "Rovers": {
                        Curiosity: {
                            'Name': "Curiosity (Любопытство)",
                            "Description": "Его миссия началась в 2011 году и продолжается по сей день.",
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
                    },
                    "Login": {
                        "Name": "Имя пользователя",
                        "ApiKey": "API ключ",
                        "Login": "Авторизоваться",
                        "Save": "Сохранить авторизационные данные и использовать их в будущем.",
                        "ApiKey Info": "Это приложение во время своей работы делает запросы к открытому АПИ НАСА. " +
                            "Для авторизации пользователей используется специальный ключ, который вы можете получить " +
                            "по адресу ",
                        "DemoKey Info": "Если по какой-либо причине вы не хотите регистрироваться, " +
                            "то вы сможете использовать данное приложение, однако, АПИ имеет ограничение по количеству запросов" +
                            " и вы сможете сделать только 25 запросов с одного IP адреса в день. " +
                            "Количество оставшихся запросов вы сможете проверить на странице профиля."
                    },
                    "Search": {
                        "End": "Дата окончания",
                        "Start": "Дата начала",
                        "Camera": "Камера",
                        "Search": "Поиск",
                        "FHAZ": "Передняя камера для предотвращения опасных ситуаций",
                        "RHAZ": "Задняя камера для предотвращения опасных ситуаций",
                        "MAST": "Мачтовая камера",
                        "CHEMCAM": "Химический и камерный комплекс",
                        "MAHLI": "Тепловизор с ручным объективом ",
                        "MARDI": "Опускаемый тепловизор",
                        "NAVCAM": "Навигационная камера",
                        "PANCAM": "Панорамная камера",
                        "MINITES": "Миниатюрный термоэмиссионный спектрометр"
                    }
                }
            }
        }
    });


export default i18n;
