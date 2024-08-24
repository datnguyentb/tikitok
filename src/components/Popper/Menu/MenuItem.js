import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/layouts/components/Button';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <div className={cx('item')}>
            <Button
                medium
                to={data.to}
                href={data.href}
                className={classes}
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
