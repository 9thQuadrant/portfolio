import { getRandomColor } from "@/app/utils/randomColor";
import { useEffect, useState } from "react";
import useScrollAndMousePosition from "../utils/hooks/useScrollAndMousePosition";

// Floating background shapes
export const BackgroundShapes = () => {
  const {scrollY} = useScrollAndMousePosition();
  const [randomColor, setRandomColor] = useState([getRandomColor(), getRandomColor()]);
  useEffect(() => 
    setRandomColor([getRandomColor(), getRandomColor()])
  , [scrollY])
  return <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {[...Array(10)].map((_, i) => (
      <div
        key={2 * i}
        className="absolute rounded-full mix-blend-screen filter blur-xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${randomColor[0]} 0%, ${randomColor[1]} 100%)`,
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: `translate(${Math.sin(scrollY * 0.001 + i) * 50}px, ${Math.cos(scrollY * 0.001 + i) * 50}px)`,
          animation: `fadeInOut ${Math.random() * 4 + 2}s forwards`,
          transition: 'transform 0.3s ease-out',
        }}
      />
    ))}
  </div>
};