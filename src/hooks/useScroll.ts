import { useEffect, type RefObject } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  animationClass: string;
  delayIncrement?: number;
}

const useScrollAnimation = <T extends HTMLElement>(
  elements: Array<RefObject<T>>,
  {
    threshold = 0.1,
    animationClass,
    delayIncrement = 100,
  }: ScrollAnimationOptions
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add(animationClass);
            target.style.animationDelay = `${index * delayIncrement}ms`;
            observer.unobserve(target);
          }
        });
      },
      { threshold }
    );

    elements.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      elements.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      observer.disconnect();
    };
  }, [elements, animationClass, delayIncrement, threshold]);
};

export default useScrollAnimation;