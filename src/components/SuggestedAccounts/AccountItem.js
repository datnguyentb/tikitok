import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '../Button';

const cx = classNames.bind(styles);

function AccountItem(data) {
    return (
        <div>
            <Tippy
                interactive={true}
                // visible
                delay={[800, 0]}
                offset={[0, 0]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('more-infor')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <div className={cx('follow-btn')}>
                                <Image
                                    className={cx('avatar-tippy')}
                                    src={data.data.avatar}
                                    alt={data.data.full_name}
                                />
                                <Button className={cx('fl-btn')} primary small>
                                    Follow
                                </Button>
                            </div>
                            <div className={cx('name-infor')}>
                                <span className={cx('name')}>
                                    {/* {data.data.full_name} {data.data.tick && <FontAwesomeIcon icon={faCircleCheck} />} */}
                                    {data.data.full_name} {<FontAwesomeIcon icon={faCircleCheck} />}
                                </span>
                                <span className={cx('username-infor')}>{data.data.nickname}</span>
                            </div>

                            <div className={cx('follower-box')}>
                                <div className={cx('follower')}>
                                    <h1>
                                        {data.data.followers_count > 1000000
                                            ? data.data.followers_count / 1000000
                                            : data.data.followers_count > 1000
                                            ? data.data.followers_count / 1000000
                                            : data.data.followers_count}
                                        {data.data.followers_count > 1000000
                                            ? 'M'
                                            : data.data.followers_count > 1000
                                            ? 'K'
                                            : ''}
                                    </h1>
                                    <span>Followers</span>
                                </div>
                                <div className={cx('likes')}>
                                    <h1>
                                        {data.data.likes_count > 1000000
                                            ? data.data.likes_count / 1000000
                                            : data.data.likes_count > 1000
                                            ? data.data.likes_count / 1000000
                                            : data.data.likes_count}
                                        {data.data.likes_count > 1000000
                                            ? 'M'
                                            : data.data.likes_count > 1000
                                            ? 'K'
                                            : ''}
                                    </h1>
                                    <span>Likes</span>
                                </div>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link to={`/@${data.data.nickname}`} className={cx('wrapper-items')}>
                    <Image className={cx('avatar')} src={data.data.avatar} alt={data.data.full_name} />
                    <div className={cx('infor')}>
                        <span className={cx('name')}>
                            {data.data.full_name} {data.data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                        </span>
                        <span className={cx('username')}>{data.data.nickname}</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
