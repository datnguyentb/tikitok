import PropTypes from 'prop-types';
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import Header from '../components/Header/index';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <Fragment>
            <Header />
            <div className={cx('content')}>{children}</div>
        </Fragment>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
