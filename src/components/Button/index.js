import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(function Button(
    {
        style_2,
        to,
        href,
        _blank,
        onClick,
        primary = false,
        outline = false,
        text = false,
        disabled = false,
        small,
        left = false,
        right = false,
        rounded,
        medium,
        large,
        left_icon,
        right_icon,
        children,
        className,
        min_wid_0,
        sup = false,
        tippy,
        ...passProps
    },
    ref,
) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        if (_blank) {
            props.target = '_blank';
        }
        Comp = 'a';
    }

    if (disabled) {
        if (href) {
            props.href = '';
        }
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    let style = 'style_1';
    if (style_2) {
        style = 'style_2';
    }

    let sup_parent = '';
    if (sup) {
        sup_parent = 'sup-parent';
    }

    const classes = cx({
        [style]: style,
        [sup_parent]: sup_parent,
        primary,
        outline,
        small,
        medium,
        large,
        left,
        right,
        rounded,
        text,
        disabled,
        min_wid_0,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props} ref={ref}>
            {left_icon ? <span className={cx('icon')}>{left_icon}</span> : ''}
            <span>{children}</span>
            {right_icon ? <span>{right_icon}</span> : ''}
            {sup ? <sup className={cx('sup')}>{sup}</sup> : ''}
        </Comp>
    );
});

Button.propTypes = {
    children: PropTypes.node.isRequired,
    style_2: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    _blank: PropTypes.bool,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    rounded: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.string,
    left_icon: PropTypes.node,
    right_icon: PropTypes.node,
    className: PropTypes.string,
    min_wid_0: PropTypes.bool,
    sup: PropTypes.string,
    tippy: PropTypes.string,
};

export default Button;
