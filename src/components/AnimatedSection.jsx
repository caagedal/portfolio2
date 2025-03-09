// useScrollReveal hook
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  // Options with defaults
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    return () => element && observer.unobserve(element);
  }, [threshold, rootMargin, triggerOnce]);
  
  return [ref, isVisible];
}