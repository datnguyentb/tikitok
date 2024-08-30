import PropTypes from 'prop-types';
import { Fragment } from 'react';
import './GlobalStyles.scss';

document.title = 'TikTok - Make Your Day';

function GlobalStyles({ children }) {
    return <Fragment>{children}</Fragment>;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
