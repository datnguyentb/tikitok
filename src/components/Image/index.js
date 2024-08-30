import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/imgs';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(fallback);
    };

    const classes = ('wrapper', className);
    return <img className={classes} ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
