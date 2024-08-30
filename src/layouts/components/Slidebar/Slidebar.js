import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import Menu from './Menu';
import * as SildebarIcon from '~/assets/svgs/slidebarIcons';

const cx = classNames.bind(styles);

const FOOTER = [
    {
        title: 'Company',
    },
    {
        title: 'Program',
    },
    {
        title: 'Terms & Policies',
    },
    {
        title: '© 2024 TikTok',
    },
];

const MENU_LIST = [
    {
        title: 'For You',
        to: '/',
        icon: <SildebarIcon.Home />,
    },
    {
        title: 'Explore',
        to: '/explore',
        icon: <SildebarIcon.Explore />,
    },
    {
        title: 'Following',
        to: '/following',
        icon: <SildebarIcon.Following />,
    },
    {
        title: 'LIVE',
        to: '/live',
        icon: <SildebarIcon.Live />,
    },
    {
        title: 'Profile',
        to: '/profile',
        icon: <SildebarIcon.Profile />,
    },
];

function Slidebar() {
    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('menu-wrapper')}>
                        <Menu data={MENU_LIST} />
                    </div>
                    <footer className={cx('footer')}>
                        <ul>
                            {FOOTER.map((item, index) => {
                                return <li key={index}>{item.title}</li>;
                            })}
                        </ul>
                    </footer>
                </div>
            </div>
        </Fragment>
    );
}

export default Slidebar;
