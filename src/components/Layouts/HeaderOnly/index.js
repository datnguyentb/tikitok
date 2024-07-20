import { Fragment } from 'react';
import classNames from 'classnames/bind';
import Header from '../components/Header';
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

export default HeaderOnly;
