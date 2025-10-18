"use client";

interface NameDecomposeProps {
  scrollProgress: number; // 0 to 1 based on scroll position
}

export const NameDecompose = ({ scrollProgress }: NameDecomposeProps) => {
  const fullName = "Phaneendra Charyulu Kanduri";
  
  // Identify P (index 0) and K (index 20)
  const pIndex = 0;
  const kIndex = fullName.indexOf('K');
  
  // Calculate animation for each letter
  const getAnimation = (index: number, char: string) => {
    const isPrimary = index === pIndex || index === kIndex;
    
    if (isPrimary) {
      // P and K don't animate
      return {
        spanTransform: 'translate(0px, 0px)',
        spanOpacity: 1,
        parentWidth: 'auto',
        isFullyAnimated: false,
      };
    }
    
    // Animate from both ends: first and last together, second and second-last, etc.
    // Calculate distance from nearest end
    const distanceFromStart = index;
    const distanceFromEnd = fullName.length - 1 - index;
    const distanceFromNearestEnd = Math.min(distanceFromStart, distanceFromEnd);
    
    // Letters at same distance from ends animate together
    const maxDistance = Math.ceil(fullName.length / 2);
    
    // Normalize to get animation order (0 = edges, higher = towards center)
    const letterStartProgress = distanceFromNearestEnd / maxDistance;
    const letterEndProgress = Math.min((distanceFromNearestEnd + 1) / maxDistance, 1);
    
    // Calculate this letter's progress (0 to 1)
    let letterProgress = 0;
    // Only start animation if we've scrolled past the start point
    if (scrollProgress >= letterStartProgress && scrollProgress > 0) {
      letterProgress = Math.min(
        (scrollProgress - letterStartProgress) / (letterEndProgress - letterStartProgress),
        1
      );
    }
    
    // Span animation: scale up and fade out in place (no translation)
    const opacity = 1 - letterProgress;
    const scale = 1 + letterProgress * 5; // Scale from 1 to 4x as it fades
    
    // Parent width animation: starts collapsing halfway through span animation
    // Use 1ch as base width unit (1 character width)
    let widthScale = 1;
    if (letterProgress > 0.5) {
      // From 0.5 to 1.0, width goes from 1ch to 0ch
      widthScale = 1 - ((letterProgress - 0.5) * 2);
    }
    
    // For spaces, use 0.5ch as base but still scale it down
    const baseWidth = char === ' ' ? 0.5 : 1;
    const finalWidth = baseWidth * widthScale;
    
    return {
      spanTransform: `scale(${scale})`,
      spanOpacity: opacity,
      parentWidth: `${finalWidth}ch`,
      isFullyAnimated: letterProgress >= 1,
    };
  };

  return (
    <div className="relative w-full min-h-[8rem] flex items-center justify-center overflow-visible">
      {/* Master flex container */}
      <div className="flex font-bold text-6xl" style={{ alignItems: 'center' }}>
        {fullName.split('').map((char, index) => {
          const animation = getAnimation(index, char);
          const isPrimary = index === pIndex || index === kIndex;
          
          // Only render if it's a primary letter OR if it hasn't fully animated away
          const shouldRender = isPrimary || !animation.isFullyAnimated;
          
          if (!shouldRender) {
            return null;
          }
          
          return (
            <div
              key={`letter-${index}`}
              className="relative overflow-visible"
              style={{
                width: animation.parentWidth,
                transition: 'width 0.15s ease-out',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  transform: animation.spanTransform,
                  opacity: animation.spanOpacity,
                  fontSize: isPrimary ? `${4 + scrollProgress * 7}rem` : '4rem', // 4rem (64px) to 6.875rem (110px)
                  background: isPrimary 
                    ? "linear-gradient(135deg, #6600cc 0%, #9900ff 50%, #ff00ff 100%)" // Multi-stop purple gradient
                    : "linear-gradient(135deg, #7700ff 0%, #bb00ff 100%)", // Lighter purple for others
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  willChange: 'transform, opacity',
                  transition: 'transform 0.15s ease-out, opacity 0.15s ease-out, font-size 0.15s ease-out',
                }}
              >
                {char}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

