import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Layouts/components/Button';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <div className={cx('item')}>
            <Button
                medium
                to={data.to}
                href={data.href}
                className={cx('menu-item')}
                left_icon={data.icon}
                left
                onClick={onClick}
            >
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
