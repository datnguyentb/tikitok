import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <NavLink to={data.to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            {data.icon}
            <span className={cx('title')}>{data.title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MenuItem;
