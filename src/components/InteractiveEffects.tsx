import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ClickRipple {
  id: number;
  x: number;
  y: number;
  color: string;
}

export const InteractiveEffects: React.FC = () => {
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Palette matching tarmim-decor.com luxury gold & navy
  const splashColors = [
    '#C9A227', // Luxury Gold
    '#A67C00', // Dark Gold
    '#E8D48B', // Light Shimmering Gold
    '#25D366', // WhatsApp Emerald
    '#16213e', // Royal Navy
  ];

  // Track global scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track cursor position & hover states on desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('[role="button"]') ||
          target.classList.contains('cursor-pointer')
        );
        setIsHoveringClickable(isClickable);
      }
    };

    // Global Click Paint Splash Effect
    const handleClick = (e: MouseEvent) => {
      const randomColor = splashColors[Math.floor(Math.random() * splashColors.length)];
      const newRipple: ClickRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: randomColor,
      };

      setRipples((prev) => [...prev.slice(-8), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 750);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* 1. Global Scroll Progress Bar at the very top in Gold */}
      <div className="fixed top-0 inset-x-0 h-1.5 z-50 pointer-events-none bg-black/10">
        <div 
          className="h-full bg-gradient-to-r from-[#A67C00] via-[#C9A227] to-[#E8D48B] shadow-[0_0_12px_rgba(201,162,39,0.8)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Custom Cursor Follower for Desktop */}
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <motion.div
          animate={{
            x: mousePos.x - (isHoveringClickable ? 24 : 16),
            y: mousePos.y - (isHoveringClickable ? 24 : 16),
            scale: isHoveringClickable ? 1.4 : 1,
            borderColor: isHoveringClickable ? '#C9A227' : 'rgba(201, 162, 39, 0.4)',
            backgroundColor: isHoveringClickable ? 'rgba(201, 162, 39, 0.15)' : 'rgba(201, 162, 39, 0.05)',
          }}
          transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
          className={`w-8 h-8 rounded-full border-2 transition-colors duration-200 pointer-events-none ${
            mousePos.x < 0 ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <motion.div
          animate={{
            x: mousePos.x - 3,
            y: mousePos.y - 3,
            scale: isHoveringClickable ? 0 : 1,
          }}
          transition={{ type: 'spring', damping: 35, stiffness: 800 }}
          className="w-1.5 h-1.5 rounded-full bg-[#C9A227] pointer-events-none"
        />
      </div>

      {/* 3. Click Paint Splash Ripples & Droplets */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <React.Fragment key={ripple.id}>
              {/* Expanding Paint Ring */}
              <motion.div
                initial={{ scale: 0.1, opacity: 0.85 }}
                animate={{ scale: 2.8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  borderColor: ripple.color,
                }}
                className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full border-2 border-dashed shadow-[0_0_15px_currentColor]"
              />

              {/* Central Soft Paint Dot Pop */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0.9 }}
                animate={{ scale: 1.6, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  backgroundColor: ripple.color,
                }}
                className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full blur-[1px]"
              />

              {/* 4 Mini Droplet Particles shooting outwards */}
              {[
                { dx: 22, dy: -22 },
                { dx: -22, dy: -22 },
                { dx: 24, dy: 20 },
                { dx: -24, dy: 20 },
              ].map((offset, i) => (
                <motion.div
                  key={i}
                  initial={{ x: ripple.x, y: ripple.y, scale: 1, opacity: 0.9 }}
                  animate={{
                    x: ripple.x + offset.dx,
                    y: ripple.y + offset.dy,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ backgroundColor: ripple.color }}
                  className="absolute w-2 h-2 rounded-full -ml-1 -mt-1 shadow-xs"
                />
              ))}
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
