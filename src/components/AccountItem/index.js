import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ user }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={user.img_src} alt={user.username} />
            <div className={cx('infor')}>
                <span className={cx('name')}>
                    {user.name} {user.checked ? <FontAwesomeIcon icon={faCircleCheck} /> : ''}
                </span>
                <span className={cx('username')}>{user.username}</span>
            </div>
        </div>
    );
}

export default AccountItem;
