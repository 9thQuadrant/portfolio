import { useEffect, useState } from "react";
import { fromEvent, debounceTime, map } from "rxjs";

export default function useScrollAndMousePosition() {
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      // Scroll observable with debounce
      const scroll$ = fromEvent(window, 'scroll').pipe(
        debounceTime(100), // Adjust debounce time as needed
        map(() => window.scrollY)
      );
  
      // Mousemove observable with debounce
      const mouseMove$ = fromEvent<MouseEvent>(window, 'mousemove').pipe(
        debounceTime(1000), // Adjust debounce time as needed
        map((e) => ({ x: e.clientX, y: e.clientY }))
      );
  
      // Subscriptions to update state
      const scrollSubscription = scroll$.subscribe(setScrollY);
      const mouseMoveSubscription = mouseMove$.subscribe(setMousePosition);
  
      // Cleanup on unmount
      return () => {
        scrollSubscription.unsubscribe();
        mouseMoveSubscription.unsubscribe();
      };
    }, []);
  
    return { scrollY, mousePosition };
  }
  