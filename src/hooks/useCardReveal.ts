import { useEffect, useRef } from 'react';

export function useCardReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let visible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          setTimeout(() => el.classList.add('revealed'), delay);
        } else {
          visible = false;
          el.classList.remove('revealed');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    requestAnimationFrame(() => {
      if (!visible) el.classList.add('card-reveal');
    });

    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
