import { useEffect, useState } from 'react';
import { useIsVisible } from './useIsVisible';

export function useCounters(target: number, duration = 1800, isDecimal = false) {
  const { ref, isVisible } = useIsVisible(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = performance.now();
    let reqId: number;
    const from = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      let nextValue = from + (target - from) * eased;
      
      setValue(isDecimal ? parseFloat(nextValue.toFixed(1)) : Math.round(nextValue));

      if (p < 1) {
        reqId = requestAnimationFrame(tick);
      }
    };

    reqId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(reqId);
  }, [isVisible, target, duration, isDecimal]);

  return { ref, value };
}
