import { forwardRef, useState } from 'react';
import images from '~/assets/imgs';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(fallback);
    };
    return <img className={className} ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
