// useIntersectionObserver.js
import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible((prevIsVisible) => {
          // If it becomes visible, keep it visible even if scrolling back up
          return prevIsVisible || entry.isIntersecting;
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(sectionRef.current);

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return [sectionRef, isVisible];
};

export default useIntersectionObserver;
