import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <Fragment>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="TikTok" />
                    </div>
                    <div className={cx('search')}>
                        <div className={cx('search-box')}>
                            <input placeholder="Search accounts and videos" />
                            <button className={cx('clear-input')}>
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
                    <form className={cx('action')}></form>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;
