import { useRef, type RefObject } from "react";

export const useFixedRefs = <T extends HTMLElement>(
  count: number
): RefObject<T>[] => {
  const refs = useRef<RefObject<T>[]>([]);

  if (refs.current.length !== count) {
    refs.current = Array.from(
      { length: count },
      (_, i) => refs.current[i] ?? { current: null }
    );
  }

  return refs.current;
};
