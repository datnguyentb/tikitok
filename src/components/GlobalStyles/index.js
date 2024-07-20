import { Fragment } from 'react';
import './GlobalStyles.scss';

document.title = 'TikTok - Make Your Day';

function GlobalStyles({ children }) {
    return <Fragment>{children}</Fragment>;
}

export default GlobalStyles;
