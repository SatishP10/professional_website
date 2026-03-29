const fs = require('fs');

let content = `import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#181714] font-sans" style={{ scrollBehavior: 'smooth' }}>
      
      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 pt-32 pb-12 w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section One (Left Half) */}
        <div className="w-full h-full flex flex-col justify-center pl-8 md:pl-20 relative z-10 py-12 md:py-0">
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-mono font-light tracking-[0.4em] text-white uppercase leading-tight mb-10 drop-shadow-xl">
            GET IN<br />TOUCH
          </h1>

          {/* Form Inputs */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col items-start space-y-2">
              <label className="border border-white/50 rounded-full px-4 py-1 text-zinc-100 font-sans font-light text-sm tracking-widest uppercase">
                Name
              </label>
              <input 
                type="text" 
                className="w-80 rounded-full border border-[#333] bg-[#22211d] px-5 py-3 text-zinc-100 font-sans font-light outline-none focus:border-white/50 transition-colors cursor-none"
              />
            </div>
            <div className="flex flex-col items-start space-y-2">
              <label className="border border-white/50 rounded-full px-4 py-1 text-zinc-100 font-sans font-light text-sm tracking-widest uppercase">
                Email
              </label>
              <input 
                type="email" 
                className="w-80 rounded-full border border-[#333] bg-[#22211d] px-5 py-3 text-zinc-100 font-sans font-light outline-none focus:border-white/50 transition-colors cursor-none"
              />
            </div>
          </div>

          {/* Footer Icons */}
          <div className="mt-16 flex space-x-6">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity cursor-none">
              <img 
                src="/pictures/blackLinkedinLogo.png" 
                alt="LinkedIn" 
                className="h-8 w-auto object-contain invert grayscale" 
              />
            </a>
            <a href="#" aria-label="GitHub" className="hover:opacity-80 transition-opacity cursor-none">
              <img 
                src="/pictures/blackGitHubPic.jpg" 
                alt="GitHub" 
                className="h-8 w-auto object-contain invert grayscale" 
              />
            </a>
            <a href="#" aria-label="Gmail" className="hover:opacity-80 transition-opacity cursor-none">
              <img 
                src="/pictures/blackGmailPic.jpg" 
                alt="Gmail" 
                className="h-8 w-auto object-contain invert grayscale" 
              />
            </a>
          </div>
        </div>

        {/* Section Two (Right Half) */}
        <div className="w-full h-full relative hidden md:block px-8 pb-8">
          <img 
            src="/pictures/bindabashiniPic.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover rounded-3xl shadow-2xl" 
          />
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
}
`;

fs.writeFileSync('src/components/Contact.jsx', content);
