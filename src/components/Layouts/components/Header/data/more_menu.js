const { faEarthAsia, faCircleQuestion, faGhost } = require('@fortawesome/free-solid-svg-icons');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGhost} />,
        title: 'Creater tools',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
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

export default MENU_ITEMS;
