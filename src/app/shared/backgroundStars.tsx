"use client";

interface BackgroundStarsProps {
  scrollY: number; // Actual scroll position in pixels
}

export const BackgroundStars = ({ scrollY }: BackgroundStarsProps) => {
  // Generate stars with consistent positions
  const stars = Array.from({ length: 80 }, (_, i) => {
    const seed = i * 137.5; // Golden ratio for distribution
    return {
      id: i,
      // Deterministic starting positions - spread across entire extended area
      startX: (seed * 3.14) % 150, // 0-150% horizontally (wider range)
      startY: (seed * 2.71) % 150, // 0-150% vertically (full screen coverage)
      // Size variation
      size: 2 + ((seed * 1.41) % 4), // 2-6px
      // Tail length variation
      tailLength: 30 + ((seed * 2.23) % 50), // 30-80px
      // Speed variation
      speedMultiplier: 0.3 + ((seed * 1.73) % 0.7), // 0.3-1.0x speed
      // Opacity variation
      opacity: 0.4 + ((seed * 1.61) % 0.4), // 0.4-0.8
      // Start offset for continuous animation
      offset: (seed * 7.89) % 3000, // Different starting points
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => {
        // Calculate star position based on continuous scroll
        const adjustedScroll = (scrollY + star.offset) * star.speedMultiplier;
        const progress = (adjustedScroll / 2000) % 1; // Loop every 2000px of adjusted scroll
        
        // Diagonal movement: bottom-right (120%, 120%) to top-left (-40%, -40%)
        const x = star.startX + 20 - (progress * 160); // Move left
        const y = star.startY + 20 - (progress * 160); // Move up
        
        // Fade in at start, fade out at end
        const fadeProgress = progress < 0.1 ? progress / 0.1 : progress > 0.9 ? (1 - progress) / 0.1 : 1;
        const opacity = star.opacity * fadeProgress;
        
        // Tail angle: -45 degrees (pointing towards bottom-right, opposite of movement direction)
        const tailAngle = -45; // degrees
        
        return (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${star.size}px`,
              height: `${star.tailLength}px`,
              opacity,
              transform: `rotate(${tailAngle}deg)`,
              transformOrigin: 'top center',
            }}
          >
            {/* Star head */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, ${opacity * 0.8})`,
              }}
            />
            {/* Star tail */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2"
              style={{
                width: `${star.size / 2}px`,
                height: '100%',
                background: `linear-gradient(to bottom, rgba(255, 255, 255, ${opacity * 0.8}), transparent)`,
                filter: `blur(${star.size / 2}px)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

