import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faArrowTrendUp, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/services/searchService';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem/AccountItem';
import SEARCH_RESULT from '../Header/data/search_result';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchResult, setSearchResult] = useState(SEARCH_RESULT);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    const debounced = useDebounce(inputValue, 500);
    //call API
    useEffect(() => {
        if (debounced.trim() !== '') {
            const fetchApi = async () => {
                setLoading(true);
                const result = await searchServices.search(debounced);
                setSearchResult(result);
                setLoading(false);
            };

            fetchApi();
        } else {
            setSearchResult([]);
        }
    }, [debounced]);

    //Clear-btn input value
    const handleButtonClick = () => {
        setInputValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setInputValue(searchValue);
        }
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
                //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {inputValue.trim() && searchResult.length !== 0 ? (
                            <div>
                                <ul className={cx('sug-result-items')}>
                                    {SEARCH_RESULT[1].map((sug, index) => {
                                        if (index < 5) {
                                            return (
                                                <li className={cx('sug-item')} key={index}>
                                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                    <span>{sug}</span>
                                                </li>
                                            );
                                        } else {
                                            return '';
                                        }
                                    })}
                                </ul>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <ul className={cx('list-accounts')}>
                                    {searchResult.map((user, index) => {
                                        return (
                                            <li className={cx('accounts-item')} key={user.id || index}>
                                                <AccountItem data={user}></AccountItem>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <h4 className={cx('search-title')}>You may like</h4>
                                <ul className={cx('trend-result-items')}>
                                    {SEARCH_RESULT[1].map((sug, index) => {
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
                        onChange={handleChange}
                        onFocus={() => setIsFocused(true)}
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                    />
                    {!loading && (
                        <button onClick={handleButtonClick} className={cx('clear-input')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <span className={cx('line')}></span>
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
