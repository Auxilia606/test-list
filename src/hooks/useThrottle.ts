import { useCallback, useRef } from "react";

const useThrottle = () => {
  const shouldWait = useRef<boolean>(false);

  const throttle = useCallback((func: () => void, ms: number) => {
    if (shouldWait.current) return;

    shouldWait.current = true;

    setTimeout(() => {
      shouldWait.current = false;
    }, ms);

    return func();
  }, []);

  const execute = (callback: () => void, delay = 100) => {
    return throttle(callback, delay);
  };

  return { execute };
};

export default useThrottle;
