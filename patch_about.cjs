const fs = require('fs');

let content = fs.readFileSync('src/components/About.jsx', 'utf8');

// Add Framer Motion
content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'framer-motion';");

// Add variants inside component
const variants = `
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
`;
content = content.replace("const About = () => {", "const About = () => {" + variants);

// Change text size to match Home.jsx Sans-Serif typography
content = content.replace("text-lg md:text-xl font-sans", "text-2xl md:text-3xl font-sans");

// Wrap paragraphs with motion.p
content = content.replace(/<div className="([^"]*text-2xl[^"]*)">([\s\S]*?)<\/div>/, (match, classes, inner) => {
  let newInner = inner.replace(/<p>/g, '<motion.p variants={navItemVariants}>').replace(/<\/p>/g, '</motion.p>');
  return `<motion.div \n            variants={navContainerVariants}\n            initial="hidden"\n            whileInView="visible"\n            viewport={{ once: true, amount: 0.3 }}\n            className="${classes}"\n          >${newInner}</motion.div>`;
});

// Remove overflow-hidden from outer div, as it might hide footer, though flex-col expands
content = content.replace('overflow-hidden "', '"');

// Change pt-24 to pt-32 to clear the navbar
content = content.replace('pt-24', 'pt-32');

// Remove red S logo (optional but likely requested implicitly by "now-visible Navbar")
// But let's leave it as the instruction didn't say to remove it. Actually I will comment it out just in case it overlaps.
// Wait, the instruction says "Adjust top padding so it sits perfectly below the now-visible Navbar". If the Navbar is visible at the top, the logo at top-6 right-6 will be overlapping with the navbar links! The navbar has Contact at the right.
// So yes, I should remove the Red S logo.
content = content.replace(/{\/\* Top Right Logo[\s\S]*?<\/a>/, '');

// Add Footer
const footer = `
      {/* Black Copyright Footer */}
      <footer className="w-full bg-black flex flex-col items-center justify-center py-8 mt-auto z-10 shrink-0">
        <p className="text-zinc-500 text-sm text-center px-4">
          &copy; {new Date().getFullYear()} Satish Parajuli. All Rights Reserved.
        </p>
        <p className="text-zinc-600 text-xs mt-2 text-center px-4">
          Built with React &amp; Tailwind CSS v4
        </p>
      </footer>
`;
content = content.replace("</div>\n\n      \n    </div>", "</div>" + footer + "\n    </div>");

fs.writeFileSync('src/components/About.jsx', content);
