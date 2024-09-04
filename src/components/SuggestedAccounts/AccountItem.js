import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem(data) {
    return (
        <Link to={`/@${data.data.nickname}`} className={cx('wrapper-items')}>
            <Image className={cx('avatar')} src={data.data.avatar} alt={data.data.full_name} />
            <div className={cx('infor')}>
                <span className={cx('name')}>
                    {data.data.full_name} {data.data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                </span>
                <span className={cx('username')}>{data.data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
