"use client";

import { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 2, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isInViewRef.current) {
          isInViewRef.current = true;
          let start = 0;
          const endValue = end;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration * 1000 / frameRate);
          const increment = endValue / totalFrames;
          let currentFrame = 0;

          const counter = setInterval(() => {
            currentFrame++;
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(counter);
            } else {
              setCount(start);
            }
          }, frameRate);
          
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);
  
  const formatNumber = (num: number) => {
    if (end.toString().includes('.')) {
      return num.toFixed(1);
    }
    return Math.round(num).toLocaleString();
  }

  return <span ref={ref}>{prefix}{formatNumber(count)}{suffix}</span>;
};

export default CountUp;
