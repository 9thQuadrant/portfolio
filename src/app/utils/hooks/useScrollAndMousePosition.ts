import { useEffect, useState } from "react";
import { fromEvent, debounceTime, map } from "rxjs";

export default function useScrollAndMousePosition() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      // Use requestAnimationFrame for buttery smooth scroll updates
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            setScrollY(window.scrollY);
            ticking = false;
          });
          ticking = true;
        }
      };
      
      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      // Mousemove observable with debounce
      const mouseMove$ = fromEvent<MouseEvent>(window, 'mousemove').pipe(
        debounceTime(1000),
        map((e) => ({ x: e.clientX, y: e.clientY }))
      );
  
      const mouseMoveSubscription = mouseMove$.subscribe(setMousePosition);
  
      // Cleanup on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
        mouseMoveSubscription.unsubscribe();
      };
    }, []);
  
    return { scrollY, mousePosition };
  }
  