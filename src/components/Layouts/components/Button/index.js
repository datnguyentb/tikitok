import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
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
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (!large && !small) {
        medium = true;
    }
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

    const classes = cx('wrapper', {
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
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {left_icon ? <span className={cx('icon')}>{left_icon}</span> : ''}
            <span>{children}</span>
            {right_icon ? <span>{right_icon}</span> : ''}
        </Comp>
    );
}

export default Button;
