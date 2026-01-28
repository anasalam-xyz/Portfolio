import { useState, useEffect, useRef } from "react";

export function useInView(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasAnimated = useRef(false);
    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            {
                threshold: 0.2,
                ...options,
            }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return [ref, isVisible];
}