import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ data }) {
    return (
        <nav className={cx('menu-list')}>
            {data.map((item, index) => {
                return <MenuItem key={index} data={item} />;
            })}
        </nav>
    );
}

Menu.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Menu;
