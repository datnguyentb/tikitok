import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Slidebar from '../components/Slidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <div className={cx('container')}>
                <Slidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </Fragment>
    );
}

export default DefaultLayout;
