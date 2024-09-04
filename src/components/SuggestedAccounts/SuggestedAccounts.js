import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable, data, number, all }) {
    const [display_number, set_display_number] = useState(number);
    const data_length = data.length;

    const render_item = data.map((item, index) => {
        if (index < display_number) {
            return <AccountItem key={index} data={item} />;
        } else {
            return '';
        }
    });

    const handleMoreDisplay = () => {
        let exp = data_length - display_number;
        if (all && exp) {
            set_display_number(data_length);
        } else if (exp > 10) {
            set_display_number(display_number + number);
        } else if (0 < exp && exp < 10) {
            set_display_number(data_length);
        } else {
            set_display_number(number);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            <div className={cx('list-acount')}>{render_item}</div>
            {number < data_length && (
                <button className={cx('more-display')} onClick={handleMoreDisplay}>
                    <p>
                        {display_number < data_length && !all
                            ? 'See more'
                            : display_number < data_length && all
                            ? 'See all'
                            : 'See less'}
                    </p>
                </button>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    number: PropTypes.number.isRequired,
    all: PropTypes.bool,
};

export default SuggestedAccounts;
