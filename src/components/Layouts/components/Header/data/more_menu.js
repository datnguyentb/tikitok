const {
    faEarthAsia,
    faCircleQuestion,
    faGhost,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} = require('@fortawesome/free-solid-svg-icons');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGhost} />,
        title: 'Creater tools',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'af',
                    title: 'Afrikaans',
                },
                {
                    type: 'language',
                    code: 'sq',
                    title: 'Albanian',
                },
                {
                    type: 'language',
                    code: 'am',
                    title: 'Amharic',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'Arabic',
                },
                {
                    type: 'language',
                    code: 'hy',
                    title: 'Armenian',
                },
                {
                    type: 'language',
                    code: 'az',
                    title: 'Azerbaijani',
                },
                {
                    type: 'language',
                    code: 'eu',
                    title: 'Basque',
                },
                {
                    type: 'language',
                    code: 'be',
                    title: 'Belarusian',
                },
                {
                    type: 'language',
                    code: 'bn',
                    title: 'Bengali',
                },
                {
                    type: 'language',
                    code: 'bs',
                    title: 'Bosnian',
                },
                {
                    type: 'language',
                    code: 'bg',
                    title: 'Bulgarian',
                },
                {
                    type: 'language',
                    code: 'ca',
                    title: 'Catalan',
                },
                {
                    type: 'language',
                    code: 'ceb',
                    title: 'Cebuano',
                },
                {
                    type: 'language',
                    code: 'ny',
                    title: 'Chichewa',
                },
                {
                    type: 'language',
                    code: 'zh-cn',
                    title: 'Chinese (Simplified)',
                },
                {
                    type: 'language',
                    code: 'zh-tw',
                    title: 'Chinese (Traditional)',
                },
                {
                    type: 'language',
                    code: 'co',
                    title: 'Corsican',
                },
                {
                    type: 'language',
                    code: 'hr',
                    title: 'Croatian',
                },
                {
                    type: 'language',
                    code: 'cs',
                    title: 'Czech',
                },
                {
                    type: 'language',
                    code: 'da',
                    title: 'Danish',
                },
                {
                    type: 'language',
                    code: 'nl',
                    title: 'Dutch',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'eo',
                    title: 'Esperanto',
                },
                {
                    type: 'language',
                    code: 'et',
                    title: 'Estonian',
                },
                {
                    type: 'language',
                    code: 'tl',
                    title: 'Filipino',
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Finnish',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'French',
                },
                {
                    type: 'language',
                    code: 'fy',
                    title: 'Frisian',
                },
                {
                    type: 'language',
                    code: 'gl',
                    title: 'Galician',
                },
                {
                    type: 'language',
                    code: 'ka',
                    title: 'Georgian',
                },
                {
                    type: 'language',
                    code: 'de',
                    title: 'German',
                },
                {
                    type: 'language',
                    code: 'el',
                    title: 'Greek',
                },
                {
                    type: 'language',
                    code: 'gu',
                    title: 'Gujarati',
                },
                {
                    type: 'language',
                    code: 'ht',
                    title: 'Haitian Creole',
                },
                {
                    type: 'language',
                    code: 'ha',
                    title: 'Hausa',
                },
                {
                    type: 'language',
                    code: 'haw',
                    title: 'Hawaiian',
                },
                {
                    type: 'language',
                    code: 'he',
                    title: 'Hebrew',
                },
                {
                    type: 'language',
                    code: 'hi',
                    title: 'Hindi',
                },
                {
                    type: 'language',
                    code: 'hmn',
                    title: 'Hmong',
                },
                {
                    type: 'language',
                    code: 'hu',
                    title: 'Hungarian',
                },
                {
                    type: 'language',
                    code: 'is',
                    title: 'Icelandic',
                },
                {
                    type: 'language',
                    code: 'ig',
                    title: 'Igbo',
                },
                {
                    type: 'language',
                    code: 'id',
                    title: 'Indonesian',
                },
                {
                    type: 'language',
                    code: 'ga',
                    title: 'Irish',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italian',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'jw',
                    title: 'Javanese',
                },
                {
                    type: 'language',
                    code: 'kn',
                    title: 'Kannada',
                },
                {
                    type: 'language',
                    code: 'kk',
                    title: 'Kazakh',
                },
                {
                    type: 'language',
                    code: 'km',
                    title: 'Khmer',
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'ku',
                    title: 'Kurdish (Kurmanji)',
                },
                {
                    type: 'language',
                    code: 'ky',
                    title: 'Kyrgyz',
                },
                {
                    type: 'language',
                    code: 'lo',
                    title: 'Lao',
                },
                {
                    type: 'language',
                    code: 'la',
                    title: 'Latin',
                },
                {
                    type: 'language',
                    code: 'lv',
                    title: 'Latvian',
                },
                {
                    type: 'language',
                    code: 'lt',
                    title: 'Lithuanian',
                },
                {
                    type: 'language',
                    code: 'lb',
                    title: 'Luxembourgish',
                },
                {
                    type: 'language',
                    code: 'mk',
                    title: 'Macedonian',
                },
                {
                    type: 'language',
                    code: 'mg',
                    title: 'Malagasy',
                },
                {
                    type: 'language',
                    code: 'ms',
                    title: 'Malay',
                },
                {
                    type: 'language',
                    code: 'ml',
                    title: 'Malayalam',
                },
                {
                    type: 'language',
                    code: 'mt',
                    title: 'Maltese',
                },
                {
                    type: 'language',
                    code: 'mi',
                    title: 'Maori',
                },
                {
                    type: 'language',
                    code: 'mr',
                    title: 'Marathi',
                },
                {
                    type: 'language',
                    code: 'mn',
                    title: 'Mongolian',
                },
                {
                    type: 'language',
                    code: 'my',
                    title: 'Myanmar (Burmese)',
                },
                {
                    type: 'language',
                    code: 'ne',
                    title: 'Nepali',
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norwegian',
                },
                {
                    type: 'language',
                    code: 'ps',
                    title: 'Pashto',
                },
                {
                    type: 'language',
                    code: 'fa',
                    title: 'Persian',
                },
                {
                    type: 'language',
                    code: 'pl',
                    title: 'Polish',
                },
                {
                    type: 'language',
                    code: 'pt',
                    title: 'Portuguese',
                },
                {
                    type: 'language',
                    code: 'pa',
                    title: 'Punjabi',
                },
                {
                    type: 'language',
                    code: 'ro',
                    title: 'Romanian',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Russian',
                },
                {
                    type: 'language',
                    code: 'sm',
                    title: 'Samoan',
                },
                {
                    type: 'language',
                    code: 'gd',
                    title: 'Scots Gaelic',
                },
                {
                    type: 'language',
                    code: 'sr',
                    title: 'Serbian',
                },
                {
                    type: 'language',
                    code: 'st',
                    title: 'Sesotho',
                },
                {
                    type: 'language',
                    code: 'sn',
                    title: 'Shona',
                },
                {
                    type: 'language',
                    code: 'sd',
                    title: 'Sindhi',
                },
                {
                    type: 'language',
                    code: 'si',
                    title: 'Sinhala',
                },
                {
                    type: 'language',
                    code: 'sk',
                    title: 'Slovak',
                },
                {
                    type: 'language',
                    code: 'sl',
                    title: 'Slovenian',
                },
                {
                    type: 'language',
                    code: 'so',
                    title: 'Somali',
                },
                {
                    type: 'language',
                    code: 'es',
                    title: 'Spanish',
                },
                {
                    type: 'language',
                    code: 'su',
                    title: 'Sundanese',
                },
                {
                    type: 'language',
                    code: 'sw',
                    title: 'Swahili',
                },
                {
                    type: 'language',
                    code: 'sv',
                    title: 'Swedish',
                },
                {
                    type: 'language',
                    code: 'tg',
                    title: 'Tajik',
                },
                {
                    type: 'language',
                    code: 'ta',
                    title: 'Tamil',
                },
                {
                    type: 'language',
                    code: 'te',
                    title: 'Telugu',
                },
                {
                    type: 'language',
                    code: 'th',
                    title: 'Thai',
                },
                {
                    type: 'language',
                    code: 'tr',
                    title: 'Turkish',
                },
                {
                    type: 'language',
                    code: 'uk',
                    title: 'Ukrainian',
                },
                {
                    type: 'language',
                    code: 'ur',
                    title: 'Urdu',
                },
                {
                    type: 'language',
                    code: 'uz',
                    title: 'Uzbek',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'cy',
                    title: 'Welsh',
                },
                {
                    type: 'language',
                    code: 'xh',
                    title: 'Xhosa',
                },
                {
                    type: 'language',
                    code: 'yi',
                    title: 'Yiddish',
                },
                {
                    type: 'language',
                    code: 'yo',
                    title: 'Yoruba',
                },
                {
                    type: 'language',
                    code: 'zu',
                    title: 'Zulu',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Dark mode',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        separate: true,
    },
];

export { MENU_ITEMS, USER_MENU };
