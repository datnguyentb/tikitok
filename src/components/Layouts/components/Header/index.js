import { Fragment } from 'react';
import Tippy from '@tippyjs/react/headless';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '../Button';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import images from '~/assets/images';
import SEARCH_RESULT from './data/search_result';
import MENU_ITEMS from './data/more_menu';
const cx = classNames.bind(styles);

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

    return (
        <Fragment>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* Logo TikTok */}
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="TikTok" />
                    </div>

                    {/* Search box */}
                    <div className={cx('tippy-wrapper')}>
                        <Tippy
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
                        </Tippy>
                    </div>

                    {/* Sig up & Log in box */}
                    <div className={cx('actions')}>
                        <Button text _blank href={'https://www.tiktok.com/'}>
                            Upload
                        </Button>

                        <Button primary to="/login">
                            Log in
                        </Button>

                        <Menu items={MENU_ITEMS}>
                            <div className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsisVertical} />
                            </div>
                        </Menu>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
