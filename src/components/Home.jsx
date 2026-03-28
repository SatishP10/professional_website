import { motion } from 'framer-motion';
import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
    
  
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#050505] bg-[url('/pictures/homePageBackground.jpg')] bg-cover bg-center bg-no-repeat text-zinc-100 overflow-hidden ">
      

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/70 pointer-events-none z-0" />

      {/* Section 1 (Hero) */}
      <section id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 shrink-0">
        <motion.div
          className="flex flex-col items-center"
          variants={heroContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-mono font-light tracking-[0.4em] uppercase drop-shadow-2xl text-center">
            I AM
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-9xl md:text-[12rem] text-[#800020] font-cursive leading-none my-6 tracking-[0.4em]">
            Satish
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl font-mono font-light tracking-[0.4em] uppercase drop-shadow-2xl text-center">
            A COMPUTER ENGINEER
          </motion.p>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a 
          href="#navigation"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-none p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
         
         
        >
          <motion.div 
            className="w-[1px] h-16 bg-white/70"
            animate={{ 
              scaleY: [0.4, 1, 0.4],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ originY: 0 }}
          />
        </motion.a>
      </section>

      {/* Section 2 (Navigation) */}
      <section id="navigation" className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 shrink-0">
        <motion.div 
          className="flex flex-col items-center text-center space-y-10"
          variants={navContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            variants={navItemVariants} 
            className="text-3xl md:text-4xl font-mono font-light leading-relaxed max-w-3xl uppercase tracking-widest"
          >
            I am a junior at the University of Texas at Dallas and I <span className="text-4xl md:text-5xl text-[#800020] font-serif italic">LOVE</span> Computers.
          </motion.p>

          <motion.div variants={navItemVariants} className="flex flex-col items-center space-y-8 mt-8">
            <Link to="/about" className="relative cursor-none text-2xl md:text-3xl font-mono font-light tracking-[0.2em] uppercase pb-2 hover:text-white transition-colors duration-500 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent"
             
             
            >
              About Me
            </Link>

            <Link to="/experiences" className="relative cursor-none text-2xl md:text-3xl font-mono font-light tracking-[0.2em] uppercase pb-2 hover:text-white transition-colors duration-500 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent"
             
             
            >
              Experiences
            </Link>

            <Link to="/contact" className="relative cursor-none text-2xl md:text-3xl font-mono font-light tracking-[0.2em] uppercase pb-2 hover:text-white transition-colors duration-500 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent"
             
             
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </section>

      
    </div>
  );
}
