import { useState, useEffect } from 'react';

export const useOnScreen = (options) => {
    const [visible, setVisible] = useState(false);
    const [ref, setRef] = useState(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [setRef, visible];
};
