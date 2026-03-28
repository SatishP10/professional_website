import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

  const navItemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#472519] relative w-full">
      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row flex-1 w-full pt-32 px-4 md:px-10 pb-10">
        
        {/* Section One: Left side */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10">
          <img 
            src="/pictures/sarangkot.jpg" 
            alt="Sarangkot" 
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Section Two: Right side */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-10 text-zinc-100">
          <h1 className="text-4xl md:text-5xl font-mono font-light tracking-[0.4em] uppercase text-center mb-10 drop-shadow-xl">
            ABOUT ME
          </h1>
          <motion.div 
            variants={navContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg md:text-xl font-sans font-light text-center max-w-2xl space-y-6 leading-relaxed"
          >
            <motion.p variants={navItemVariants}>
              I am Satish Parajuli. A Computer Engineering student at the University of Texas at Dallas. 
            </motion.p>
            <motion.p variants={navItemVariants}>
              My family and I moved from Pokhara, Nepal (pictured on the left) to America in 2008. During the recession my father had brought home an HP gaming computer.
              Ever since then, I’ve been tinkering with computers, as it was astounding how small rocks could create images on a glass screen.
              That is what led me to pursuing my Bachelor’s degree in Computer Engineering and now I can say that from sticking a screwdriver
              in the cd player to creating my own drivers, I’ve interacted with computers at every single level. 
            </motion.p>
            <motion.p variants={navItemVariants}>
              My specialization is the intersection of hardware and software. 
              Specifically in applying machine learning to improve hardware and hardware processes. 
            </motion.p>
            <motion.p variants={navItemVariants}>
              Since my degree, I have completed two internships at Booz Allen Hamilton and Raytheon
              respectively and I have an upcoming internship at AMD as an EDA intern focusing on machine learning.
            </motion.p>
            <motion.p variants={navItemVariants}>
              My professional journey is just in its adolescent stages. As of now, I am focused on building a foundation 
              that will ensure my greatest success(es) are yet to come. 
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Black Copyright Footer */}
      <footer className="w-full bg-black flex flex-col items-center justify-center py-8 mt-auto z-10 shrink-0">
        <p className="text-zinc-500 text-sm text-center px-4">
          &copy; {new Date().getFullYear()} Satish Parajuli. All Rights Reserved.
        </p>
        <p className="text-zinc-600 text-xs mt-2 text-center px-4">
          Built with React &amp; Tailwind CSS v4
        </p>
      </footer>
    </div>
  );
};

export default About;