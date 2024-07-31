import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import { MENU_ITEMS, USER_MENU } from './data/more_menu';
import { InboxSvg, LogoSvg, MessagesSvg } from '~/assets/svgs';
// import { NoImage } from '~/assets/imgs';
import Image from '~/components/Image';

import Button from '../Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const currentUser = {
    name: 'Nguyen Van A',
    username: 'nguyenvana',
    img_src: 'https://cdn.tuoitre.vn/thumb_w/730/2022/10/27/son-tung-4-1666838826176719239917.jpeg',
    checked: true,
    part: '@nguyenvana',
};

// const currentUser = false;
function Header() {
    //Handle Logic
    const handleMenuChange = (option) => {
        switch (option.type) {
            case 'language':
                console.log(`Ngôn ngữ được chuyển thành ${option.title}`);
                break;
            default:
        }
    };

    return (
        <Fragment>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo TikTok */}
                    <Link to="/" className={cx('logo')}>
                        <LogoSvg />
                    </Link>

                    {/* Search box */}
                    <div className={cx('search-wrapper')}>
                        <Search />
                    </div>

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <div className={cx('actions-wrapper')}>
                                <Button outline medium left_icon={<FontAwesomeIcon icon={faPlus} />}>
                                    Upload
                                </Button>
                                <Tippy content="Messages">
                                    <Button
                                        href="https://www.tiktok.com/"
                                        _blank
                                        className={cx('messages')}
                                        style_2
                                        tippy='content: "Hello"'
                                    >
                                        <MessagesSvg />
                                    </Button>
                                </Tippy>
                                <Tippy content="Inbox">
                                    <Button className={cx('inbox')} style_2 sup="2">
                                        <InboxSvg />
                                    </Button>
                                </Tippy>
                            </div>
                        ) : (
                            <div className={cx('actions-wrapper')}>
                                <Button medium text _blank href={'https://www.tiktok.com/'}>
                                    Upload
                                </Button>

                                <Button medium primary to="/login">
                                    Log in
                                </Button>
                            </div>
                        )}
                        <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <button className={cx('avatar')}>
                                    <Image src={currentUser.img_src} alt={currentUser.name} />
                                </button>
                            ) : (
                                <div className={cx('more-btn')}>
                                    <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsisVertical} />
                                </div>
                            )}
                        </Menu>
                    </div>
                    {/* Sig up & Log in box */}
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
