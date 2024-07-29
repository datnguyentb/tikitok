import { Fragment } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import { MENU_ITEMS, USER_MENU } from './data/more_menu';
import { InboxSvg, LogoSvg, MessagesSvg } from '~/assets/svgs';
// import { NoImage } from '~/assets/imgs';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '../Button';
import AccountItem from '~/components/AccountItem';
import SEARCH_RESULT from './data/search_result';
import Menu from '~/components/Popper/Menu';

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
    //visible search-result
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);

        const inputElement = inputRef.current;
        inputElement.addEventListener('focus', handleFocus);
        inputElement.addEventListener('blur', handleBlur);

        return () => {
            inputElement.removeEventListener('focus', handleFocus);
            inputElement.removeEventListener('blur', handleBlur);
        };
    }, []);

    //Lắng nghe onChange thẻ input
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    //Clear-btn input value
    const handleButtonClick = () => {
        setInputValue('');
    };

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
                    <div className={cx('logo')}>
                        <LogoSvg />
                    </div>

                    {/* Search box */}
                    <div className={cx('tippy-wrapper')}>
                        <HeadlessTippy
                            visible={isFocused}
                            // visible={true}
                            interactive={true}
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <ul className={cx('sug-result-items')}>
                                            {SEARCH_RESULT[1].map((sug, index) => {
                                                return (
                                                    <li className={cx('sug-item')} key={index}>
                                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                        <span>{sug}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <h4 className={cx('search-title')}>Accounts</h4>
                                        <ul className={cx('list-accounts')}>
                                            {SEARCH_RESULT[0].map((user, index) => {
                                                return (
                                                    <li className={cx('accounts-item')} key={index}>
                                                        <AccountItem user={user}></AccountItem>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('search')}>
                                <div className={cx('search-box')}>
                                    <input
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        ref={inputRef}
                                        placeholder="Search accounts and videos"
                                    />
                                    <button onClick={handleButtonClick} className={cx('clear-input')}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                    <button className={cx('loading')}>
                                        <FontAwesomeIcon icon={faSpinner} />
                                    </button>
                                    <span className={cx('line')}></span>
                                    <button className={cx('search-btn')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                                </div>
                            </div>
                        </HeadlessTippy>
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
