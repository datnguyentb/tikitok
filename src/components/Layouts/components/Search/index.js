import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faArrowTrendUp, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import SEARCH_RESULT from '../Header/data/search_result';

const cx = classNames.bind(styles);

function Search() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchResult, setSearchResult] = useState(SEARCH_RESULT);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    //Clear-btn input value
    const handleButtonClick = () => {
        setInputValue('');
        // setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setIsFocused(false);
    };
    return (
        <HeadlessTippy
            visible={(isFocused && searchResult.length > 0) || (isFocused && inputValue === '')}
            // visible={true}
            interactive={true}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {inputValue ? (
                            <div>
                                <ul className={cx('sug-result-items')}>
                                    {searchResult[1].map((sug, index) => {
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
                                    {searchResult[0].map((user, index) => {
                                        return (
                                            <li className={cx('accounts-item')} key={index}>
                                                <AccountItem user={user}></AccountItem>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <h4 className={cx('search-title')}>You may like</h4>
                                <ul className={cx('trend-result-items')}>
                                    {searchResult[1].map((sug, index) => {
                                        return (
                                            <li className={cx('trend-item')} key={index}>
                                                <FontAwesomeIcon icon={faArrowTrendUp} />
                                                <span>{sug}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <div className={cx('search-box')}>
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
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
    );
}

export default Search;
