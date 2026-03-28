import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExpandableCard = ({ title, subtitle, isPill = false, variants }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (

    <motion.div
      variants={variants}
      onClick={() => setIsOpen(!isOpen)}
      className={`cursor-none transition-all duration-300 ease-in-out border border-[#333] bg-[#22211d] hover:bg-[#2c2a26] flex flex-col justify-center w-full
      ${isPill ? 'rounded-[50px] px-10 py-6' : 'rounded-3xl p-8'}
      `}
    >
      <div className="flex flex-col">
        <h3 className="font-mono font-light tracking-[0.2em] uppercase text-xl text-zinc-100">{title}</h3>
        {subtitle && <p className="font-sans font-light text-zinc-300 text-base mt-2">{subtitle}</p>}
      </div>

      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden min-h-0">
          <div className="pt-4">
            <p className="font-sans font-light text-zinc-100 text-base leading-relaxed opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experiences() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-[#181714] flex flex-col w-full" style={{ scrollBehavior: 'smooth' }}>
      
      {/* Content Buffer */}
      <div className="flex-1 flex flex-col px-6 md:px-12 pt-24 pb-20 w-full max-w-7xl mx-auto">
        
        {/* Section 1: Experience */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-mono font-light tracking-[0.4em] text-zinc-100 uppercase mb-10 drop-shadow-xl text-center md:text-left">Experience</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ExpandableCard variants={itemVariants}
              title="EDA and ML Intern @ AMD"
              subtitle="Austin, TX"
            />
            <ExpandableCard variants={itemVariants}
              title="Systems Security Engineering Intern @ Raytheon"
              subtitle="Marlborough, MA"
            />
            <ExpandableCard variants={itemVariants}
              title="Systems Engineer and Consultant Intern @ Booz Allen Hamilton"
              subtitle="Odon, IN"
            />
          </div>
        </motion.section>

        {/* Section 2: Projects */}
        <motion.section
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-mono font-light tracking-[0.4em] text-zinc-100 uppercase mb-10 drop-shadow-xl text-center md:text-left">Projects</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ExpandableCard variants={itemVariants}
              title="FPGA C/A Code Generator"
              subtitle="A project that combined knowledge of RF Communication and digital logic."
            />
            <ExpandableCard variants={itemVariants}
              title="Digital Comms. & Sampling Analysis"
              subtitle="Generated FFTs and characterized sinc-shaped spectra for hardware trojan detection."
            />
            <ExpandableCard variants={itemVariants}
              title="CUDA Accelerated AI Audio Processing Software"
              subtitle="GPU accelerated software for audio processing and AI pitch correction."
            />
          </div>
        </motion.section>

        {/* Section 3: Education */}
        <motion.section
          className="mt-24 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-mono font-light tracking-[0.4em] text-zinc-100 uppercase mb-10 drop-shadow-xl text-center md:text-left">Education</motion.h2>
          <div className="w-full">
            <ExpandableCard variants={itemVariants}
              title="Bachelor’s of Science in Computer Engineering @ The University of Texas at Dallas"
              isPill={true}
            />
          </div>
        </motion.section>
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
}
