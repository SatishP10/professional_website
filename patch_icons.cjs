const fs = require('fs');

let content = fs.readFileSync('src/components/Contact.jsx', 'utf8');

const oldIcons = `          {/* Footer Icons */}
          <motion.div variants={itemVariants} className="mt-12 flex space-x-6">
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
          </motion.div>`;

const newIcons = `          {/* Footer Icons */}
          <motion.div variants={itemVariants} className="mt-12 flex space-x-6 items-center">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity cursor-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" className="h-8 w-8">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:opacity-80 transition-opacity cursor-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="h-8 w-8">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Gmail" className="hover:opacity-80 transition-opacity cursor-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8">
                <path d="M2.25 5.5l9.75 7.5 9.75-7.5v-1a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 002.25 4.5v1z" fill="#EA4335"/>
                <path d="M21.75 5.5v12a2.25 2.25 0 01-2.25 2.25h-1.5v-7.5l3.75-3v-3.75z" fill="#34A853"/>
                <path d="M2.25 5.5v12a2.25 2.25 0 002.25 2.25h1.5v-7.5L2.25 9.25v-3.75z" fill="#FBBC05"/>
                <path d="M6 12.25l6 4.5 6-4.5V19.75H6v-7.5z" fill="#4285F4"/>
              </svg>
            </a>
          </motion.div>`;

// Because I ran a sed command earlier, invert grayscale might be missing from the string. Let's do a more robust replace.
content = content.replace(/<motion\.div variants={itemVariants} className="mt-12 flex space-x-6">[\s\S]*?<\/motion\.div>/, newIcons);

fs.writeFileSync('src/components/Contact.jsx', content);
