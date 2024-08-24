import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';

const cx = classNames.bind(styles);

const footer_list = [
    {
        title: 'Công ty',
    },
    {
        title: 'Chương trình',
    },
    {
        title: 'Điều khoản và chính sách',
    },
    {
        title: '© 2024 TikTok',
    },
];

function Slidebar() {
    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <footer className={cx('footer')}>
                        <ul>
                            {footer_list.map((item, index) => {
                                return <li key={index}>{item.title}</li>;
                            })}
                        </ul>
                    </footer>
                </div>
            </div>
        </Fragment>
    );
}

export default Slidebar;
