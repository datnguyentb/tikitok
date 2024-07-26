import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Layouts/components/Button';
const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div className={cx('item')}>
            <Button className={cx('menu-item')} left_icon={data.icon} left>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
