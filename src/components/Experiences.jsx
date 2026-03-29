import React, { useState } from 'react';
import { motion } from 'framer-motion';

const professionalExperience = [
  {
    title: "AMD",
    role: "EDA and ML Intern",
    summary: "Upcoming!",
    tags: ["Python", "ML", "VLSI", "EDA", "Automation"]
  },
  {
    title: "Raytheon (RTX)",
    role: "Systems Security Engineering Intern",
    summary: "Developed a mission critical automation application through the use of Raytheon and Bash to streamline system configuration and maintenance. Engineered an in house interface with a GUI for executing Ansible playbooks, automating complex tasks for both the engineers and the end users in the field. The application was created by using IBM ClearCase for version control in the secure development environment, which reduced manual configuration errors and operational downtime.",
    tags: ["Hardware Security", "Cryptography", "Bash", "Ansible", "ClearCase"]
  },
  {
    title: "Booz Allen Hamilton",
    role: "Systems Engineer Intern",
    summary: "Performed comprehensive systems validation and RF vulnerability analysis on a commercial UAV. Utilized a HackRF, a type of Software Defined Radio (SDR) and GNU Radio to analyze and probe RF subsystems. This included controls, video links, and GPS navigation. Engineered a GPS Spoofing system to test navigation logic (83% validation) and reverse engineered the control packet formats to create and execute a Man-in-the-Middle (MITM) attack, successfully validating critical failure points in the communication chain.",
    tags: ["SDR", "GNU Radio", "RF Analysis", "Reverse Engineering"]
  }
];

const personalProjects = [
  {
    title: "FPGA C/A Code Generator",
    role: "A project that combined knowledge of RF Communication and digital logic.",
    summary: "Engineered a high-speed Gold Code generator on a Lattice-based FPGA (Nandland Go Board) using Verilog to simulate GPS C/A code sequences. It was developed using an open-source toolchain (Yosys, nextpnr, iverilog) within a WSL/Ubuntu environment. I implemented the digital logic using Linear Feedback Shift Registers (LFSRs) to achieve precise phase alignment. In addition to that, I validated hardware functionality via a custom Verilog testbench and integrated a clock-divider module to visualize real-time code generation on an LED display.",
    tags: ["FPGA", "Verilog", "RF", "Digital Logic"]
  },
  {
    title: "Digital Comms. & Sampling Analysis",
    role: "Generated FFTs and characterized sinc-shaped spectra for hardware trojan detection.",
    summary: "Used Python and various libraries including: Matplotlib, SciPy, and NumPy to generate various pulses, compute FFTS, and characterize sinc-shaped spectra in order to validate sampling theory. Additionally, I designed and simulated BPSK/QPSK modulators and demodulators, while benchmarking bit error rate (BER) with additive white gaussian noise (AWGN) introduced. This simulation suite served as the baseline for a hardware assurance lab, which enabled the detection of hardware trojans in PCBs by identifying the changes in signal waveforms.",
    tags: ["MATLAB", "DSP", "FFT", "Hardware Security"]
  },
  {
    title: "CUDA Accelerated AI Audio Processing Software",
    role: "GPU accelerated software for audio processing and AI pitch correction.",
    summary: "Created a high-performance audio processing engine to address latency bottlenecks in real-time pitch correction. Good ones were too expensive and the free ones took way too long. Solved the time problem by making the software GPU accelerated through the use of CUDA for noise reduction, filtering, and to achieve efficient processing of audio signals. Then, the audio sample was pipelined to a pretrained AI model that performed pitch correction on human voices.",
    tags: ["C++", "CUDA", "AI", "Audio Processing"]
  }
];

const ExperienceCard = ({ title, role, summary, tags, isPill = false, index = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 } 
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      onClick={() => setIsOpen(!isOpen)}
      className={`cursor-none transition-all duration-300 ease-in-out border-2 border-white bg-black hover:bg-zinc-900 flex flex-col justify-center w-full
      ${isPill ? 'rounded-[50px] px-10 py-6' : 'rounded-[40px] p-8'}
      `}
    >
      <div className="flex flex-col">
        <h3 className="font-mono font-light tracking-[0.2em] uppercase text-xl text-white">{title}</h3>
        {role && <p className="font-sans font-light text-white text-base mt-2">{role}</p>}
      </div>

      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden min-h-0">
          <div className="pt-4 flex flex-col gap-4">
            {summary && (
              <p className="font-sans font-light text-white text-base leading-relaxed opacity-90">
                {summary}
              </p>
            )}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-white text-xs font-mono rounded-full border border-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>
            )}
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
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-mono font-light tracking-[0.4em] text-white uppercase mb-10 drop-shadow-xl text-center md:text-left">Experience</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {professionalExperience.map((exp, index) => {
              console.log("Rendering Card:", exp.title);
              return (
                <ExperienceCard
                  key={index}
                  index={index}
                  title={exp.title}
                  role={exp.role}
                  summary={exp.summary}
                  tags={exp.tags}
                />
              );
            })}
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
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-mono font-light tracking-[0.4em] text-white uppercase mb-10 drop-shadow-xl text-center md:text-left">Projects</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => {
              console.log("Rendering Card:", project.title);
              return (
                <ExperienceCard
                  key={index}
                  index={index}
                  title={project.title}
                  role={project.role}
                  summary={project.summary}
                  tags={project.tags}
                />
              );
            })}
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
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-mono font-light tracking-[0.4em] text-white uppercase mb-10 drop-shadow-xl text-center md:text-left">Education</motion.h2>
          <div className="flex flex-col gap-6 w-full">
            <ExperienceCard
              index={0}
              title="Bachelor’s of Science in Computer Engineering at The University of Texas at Dallas"
              isPill={true}
              summary="Learned both  CS and EE concepts, ranging from data structures and algorithms, to operating systems, to electrical network analysis."
            />
            <ExperienceCard
              index={1}
              title="IEEE RF Mentor"
              isPill={true}
              summary="As a part of the Institute of Electrical and Electronic Engineers (IEEE), I taught underclassmen the fundamentals of RF and signal processing. This was done with the use of the Arduino Uno and various receivers and transmitters."
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
