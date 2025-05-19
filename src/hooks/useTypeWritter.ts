import { useEffect, useRef } from "react";

const useTypewriterOnScroll = ({
  threshold = 0.1,
  animate,
}: {
  threshold?: number;
  animate: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animate, threshold]);

  return ref;
};

export default useTypewriterOnScroll;
