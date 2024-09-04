import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import Menu from './Menu';
import * as SildebarIcon from '~/assets/svgs/slidebarIcons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import suggestedData from './data';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const FOOTER = [
    {
        title: 'Company',
        children: [
            {
                title: 'About',
                to: '/about',
            },
            {
                title: 'Newsroom',
                to: '/newsroom',
            },
            {
                title: 'Contact',
                to: '/about/contact',
            },
            {
                title: 'Careers',
                to: '/careers',
            },
        ],
    },
    {
        title: 'Program',
        children: [
            {
                title: 'About',
                to: '/about',
            },
            {
                title: 'Newsroom',
                to: '/newsroom',
            },
            {
                title: 'Contact',
                to: '/about/contact',
            },
            {
                title: 'Careers',
                to: '/careers',
            },
        ],
    },
    {
        title: 'Terms & Policies',
        children: [
            {
                title: 'About',
                to: '/about',
            },
            {
                title: 'Newsroom',
                to: '/newsroom',
            },
            {
                title: 'Contact',
                to: '/about/contact',
            },
            {
                title: 'Careers',
                to: '/careers',
            },
        ],
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

const user = false;

function Slidebar() {
    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('menu-wrapper')}>
                        <Menu data={MENU_LIST} />
                    </div>
                    {!user && (
                        <div className={cx('frame-container')}>
                            <p className={cx('nav-login')}>
                                Log in to follow creators, like videos, and view comments.
                            </p>
                            <Button className={cx('login-btn')} to="/login" large outline>
                                Log in
                            </Button>
                        </div>
                    )}
                    <div className={cx('suggest-accounts')}>
                        <SuggestedAccounts
                            lable={user ? 'Following acounts' : 'Suggested for you'}
                            data={suggestedData}
                            number={8}
                            all
                        />
                    </div>
                    <footer className={cx('footer')}>
                        <div className={cx('footer-banner')}>
                            <a
                                className={cx('banner-wrapper')}
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.tiktok.com/foryou"
                            >
                                <img
                                    className={cx('banner-img')}
                                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                                    alt="reward"
                                />
                                <h4 className={cx('content-banner')}>Create TikTok effects, get a reward</h4>
                            </a>
                        </div>
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
