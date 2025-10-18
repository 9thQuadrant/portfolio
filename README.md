# Portfolio - Phaneendra Charyulu Kanduri

Hey there! 👋 This is my personal portfolio website built with Next.js 15, featuring some pretty cool scroll-bound animations inspired by Angular.io's hero section.

## What Makes This Special?

### 🎯 Name Decomposition Animation
The centerpiece is this smooth name animation where "Phaneendra Charyulu Kanduri" gradually decomposes into just "PK" as you scroll down. Here's how it works:

- **Full name appears first** - You see my complete name at the top
- **Scroll-bound animation** - Every letter disappears as you scroll (works both ways!)
- **Symmetric fade** - Letters fade from both ends simultaneously (first and last together, second and second-last, etc.)
- **Scale effect** - Each letter scales up to 6x its size while fading out, creating a nice explosion effect
- **Width collapse** - The container width shrinks as letters fade, naturally bringing P and K together
- **Growing primaries** - P and K grow from 64px to 110px as they become the focus
- **Smooth as butter** - Uses `requestAnimationFrame` for super smooth 60fps scroll handling

### ✨ Background Falling Stars
Yeah, I know "falling stars" usually fall down, but these bad boys move upward! They:
- Move diagonally from bottom-right to top-left
- Have glowing tails pointing in the opposite direction
- Are distributed across the entire screen using deterministic positioning (Golden Angle distribution)
- Continuously animate throughout the page scroll
- Each star has varying size, speed, and opacity for depth

### 🌙 Moon Animation
At the very bottom of the page, a moon slides up with a nice bouncy effect. It's got:
- A soft glow around it
- Crater details for realism
- Smooth entrance animation when you reach the bottom
- Positioned at bottom-right (120px from edges)

## Technical Details

### The Scroll Magic
The whole thing is driven by a custom React hook (`useScrollAndMousePosition`) that:
- Uses `requestAnimationFrame` instead of normal scroll events
- This syncs scroll updates with the browser's repaint cycle
- Result? Buttery smooth animations even when dragging the scrollbar
- Also tracks mouse position using RxJS observables (for potential future features)

### Animation Math
For the name decomposition, here's the clever bit:
- Each letter's animation is calculated based on its distance from the nearest end
- Letters at equal distance from start/end animate together
- Uses `ch` units (character width) for the width animation - super responsive!
- Parent div width collapses halfway through the letter's fade animation
- Scale transform: `1 + progress * 5` (so 1x to 6x)
- Transitions are set to `0.15s ease-out` for smooth interpolation between scroll positions

### Color Scheme
- Primary letters (P & K): Multi-stop purple gradient `#6600cc → #9900ff → #ff00ff`
- Other letters: Lighter purple gradient `#7700ff → #bb00ff`
- Background: Dark gradient from `gray-900` to `black`
- Stars: White with glowing tails
- Moon: Gradient from `yellow-50` to `yellow-200` with soft glow

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Pure CSS transforms + React state
- **Scroll Handling**: Custom hook with `requestAnimationFrame`
- **State Management**: React hooks (`useState`, `useEffect`)
- **Observables**: RxJS for mouse tracking

## How to Run

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# Open browser to
http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Main page with scroll logic
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── shared/
│   │   ├── nameDecompose.tsx    # The star of the show
│   │   ├── backgroundStars.tsx  # Animated stars
│   │   ├── timeline.tsx         # Experience timeline
│   │   ├── projects.tsx         # Project cards
│   │   ├── skillCard.tsx        # Skill display
│   │   └── socialLink.tsx       # Social media links
│   └── utils/
│       └── hooks/
│           └── useScrollAndMousePosition.ts  # Scroll magic
```

## Key Implementation Notes

### Avoiding Hydration Errors
The stars component uses deterministic positioning (not `Math.random()`) to ensure server and client render the same thing. This prevents Next.js hydration errors.

### Performance Optimization
- `willChange: 'transform, opacity'` hints to the browser for GPU acceleration
- Passive scroll listeners: `{ passive: true }` for better scroll performance
- `requestAnimationFrame` throttles updates to display refresh rate
- Letters that have fully animated are removed from DOM to reduce render load

### Responsive Design
- Uses `ch` units for character widths (scales with font size)
- Flexbox for natural letter spacing
- `min-h-[250vh]` for hero section ensures full animation completes
- All measurements use relative units where possible

## Interview Answer

If someone asks "How did you build that name decomposition animation?":

> "It's a scroll-bound animation where I calculate each letter's animation progress based on the current scroll position. The trick is using flexbox with individual div containers for each letter, where the width animates to 0 using ch units (character width). This naturally brings the remaining letters together without any hard-coded measurements. 
>
> The letters themselves scale up and fade out simultaneously. To make it symmetric, I calculate each letter's distance from the nearest end, so letters equidistant from both ends animate together. 
>
> For smoothness, I use requestAnimationFrame to sync scroll updates with the browser's repaint cycle, and add CSS transitions to interpolate between scroll positions. The whole thing is fully reversible - works perfectly when scrolling up or down."

## What I Learned

- Scroll-bound animations need careful progress calculation (0-1 range mapping)
- `requestAnimationFrame` > throttling > debouncing for scroll events
- Flexbox + width animation = responsive letter spacing without calculations
- CSS transitions smooth out discrete scroll updates
- Next.js hydration: server and client must render identically
- `ch` units are perfect for text-based animations

## Future Ideas

- Add more interactive elements based on mouse position
- Parallax effects on the timeline section
- Smooth scroll navigation
- Dark/light theme toggle
- More complex particle effects

---

**Built with ❤️ by Phaneendra Charyulu Kanduri**

Feel free to reach out: [phaneendra9q@gmail.com](mailto:phaneendra9q@gmail.com)
