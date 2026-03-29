import { motion } from 'framer-motion';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ variant = 'dark' }) {
  const isDark = variant === 'dark';
  const bgClass = isDark ? 'bg-black' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-black';

  return (
    <motion.nav
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 w-full z-[100] flex justify-center items-center py-5 ${bgClass} ${textClass} font-sans uppercase tracking-widest text-sm md:text-base font-medium shadow-md`}
    >
      <Link
        to="/"
        className="absolute left-8 w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-105"
        aria-label="Home"
      >
        <span className="font-[cursive] text-red-500 text-3xl italic">S</span>
      </Link>

      <div className="flex space-x-6 md:space-x-12">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? 'border-b-2 border-current pb-1' : 'hover:opacity-70 transition-opacity pb-1'
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? 'border-b-2 border-current pb-1' : 'hover:opacity-70 transition-opacity pb-1'
          }
        >
          About
        </NavLink>
        <NavLink 
          to="/experiences" 
          className={({ isActive }) => 
            isActive ? 'border-b-2 border-current pb-1' : 'hover:opacity-70 transition-opacity pb-1'
          }
        >
          Experiences
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? 'border-b-2 border-current pb-1' : 'hover:opacity-70 transition-opacity pb-1'
          }
        >
          Contact
        </NavLink>
      </div>
    </motion.nav>
  );
}
