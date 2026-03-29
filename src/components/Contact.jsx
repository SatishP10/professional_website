import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        'service_5xbrmr5',
        'template_y12nmyi',
        form.current,
        'CbVwGXCUFo_1F8fOY'
      )
      .then(
        (result) => {
          setIsSending(false);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', questions: '' });
        },
        (error) => {
          setIsSending(false);
          setSubmitStatus('error');
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-black font-sans text-white" style={{ scrollBehavior: 'smooth' }}>
      
      {/* Main Content Area */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex-1 grid grid-cols-1 md:grid-cols-2 pt-32 pb-12 w-full max-w-7xl mx-auto relative z-10"
      >
        
        {/* Section One (Left Half) */}
        <div className="w-full h-full flex flex-col justify-center pl-8 md:pl-20 relative z-10 py-12 md:py-0">
          
          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-mono font-light tracking-[0.4em] text-white uppercase leading-tight mb-10 drop-shadow-xl">
            GET IN<br />TOUCH
          </motion.h1>

          {/* Form Inputs */}
          <motion.form variants={itemVariants} ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
            <div className="flex flex-col items-start space-y-2">
              <label className="border border-white/50 rounded-full px-4 py-1 text-zinc-100 font-sans font-light text-sm tracking-widest uppercase">
                Name
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-80 rounded-full border-2 border-white bg-black px-5 py-3 text-zinc-100 font-sans font-light outline-none focus:border-gray-400 transition-colors cursor-none"
              />
            </div>
            
            <div className="flex flex-col items-start space-y-2">
              <label className="border border-white/50 rounded-full px-4 py-1 text-zinc-100 font-sans font-light text-sm tracking-widest uppercase">
                Email
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-80 rounded-full border-2 border-white bg-black px-5 py-3 text-zinc-100 font-sans font-light outline-none focus:border-gray-400 transition-colors cursor-none"
              />
            </div>
            
            <div className="flex flex-col items-start space-y-2">
              <label className="border border-white/50 rounded-full px-4 py-1 text-zinc-100 font-sans font-light text-sm tracking-widest uppercase">
                Questions
              </label>
              <textarea 
                name="message"
                value={formData.questions}
                onChange={handleChange}
                required
                className="w-80 h-40 rounded-[32px] border-2 border-white bg-black p-5 text-zinc-100 font-sans font-light outline-none focus:border-gray-400 transition-colors cursor-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-80 rounded-full border-2 border-white bg-white text-black px-5 py-3 font-sans font-semibold outline-none hover:bg-black hover:text-white transition-colors cursor-none disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest mt-4"
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>

            {submitStatus === 'success' && (
              <p className="w-80 text-white font-sans text-sm text-center">Message Sent!</p>
            )}
            {submitStatus === 'error' && (
              <p className="w-80 text-red-400 font-sans text-sm text-center">Error, please try again</p>
            )}
          </motion.form>

          {/* Footer Icons */}
                    {/* Footer Icons */}
          <motion.div variants={itemVariants} className="mt-12 flex space-x-6 items-center">
            <a 
              href="https://www.linkedin.com/in/satishparajuli" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit my LinkedIn profile" 
              className="hover:opacity-80 transition-opacity cursor-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" className="h-8 w-8">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/SatishP10" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit my GitHub profile" 
              className="hover:opacity-80 transition-opacity cursor-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="h-8 w-8">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="mailto:parajuli.satish10@gmail.com" 
              aria-label="Send me an email" 
              className="hover:opacity-80 transition-opacity cursor-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
                <path d="M2.25 5.5l9.75 7.5 9.75-7.5v-1a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 002.25 4.5v1z" fill="#EA4335"/>
                <path d="M21.75 5.5v12a2.25 2.25 0 01-2.25 2.25h-1.5v-7.5l3.75-3v-3.75z" fill="#34A853"/>
                <path d="M2.25 5.5v12a2.25 2.25 0 002.25 2.25h1.5v-7.5L2.25 9.25v-3.75z" fill="#FBBC05"/>
                <path d="M6 12.25l6 4.5 6-4.5V19.75H6v-7.5z" fill="#4285F4"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Section Two (Right Half) */}
        <motion.div variants={itemVariants} className="w-full h-full relative hidden md:block px-8 pb-8">
          <img 
            src="/pictures/bindabashiniPic.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover rounded-3xl shadow-2xl" 
          />
        </motion.div>
      </motion.div>

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
