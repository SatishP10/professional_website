import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    
    // Globally handle hover states on interactive elements for the custom cursor
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, [data-cursor-hover]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Set navbar theme based on route
  const navVariant = location.pathname === '/contact' ? 'light' : 'dark';

  return (
    <div className="relative flex flex-col min-h-screen w-full cursor-none">
      {/* Global Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ 
          x: cursorPos.x - 6, 
          y: cursorPos.y - 6,
          scale: isHovered ? 3 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Global Navbar */}
      {location.pathname !== '/' && <Navbar variant={navVariant} />}

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col w-full relative">
        {children}
      </main>
    </div>
  );
}
