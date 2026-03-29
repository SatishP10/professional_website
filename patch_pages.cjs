const fs = require('fs');

function processHome() {
  let code = fs.readFileSync('src/components/Home.jsx', 'utf8');
  
  // Remove cursor states and useEffect
  code = code.replace(/const \[cursorPos.*?\n/g, '');
  code = code.replace(/const \[isHovered.*?\n/g, '');
  code = code.replace(/useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);\n\n/g, '');
  
  // Remove cursor div
  code = code.replace(/\{\/\* Custom Cursor \*\/\}[\s\S]*?mix-blend-difference"[\s\S]*?\/>/, '');
  
  // Remove footer
  code = code.replace(/\{\/\* Footer \*\/\}[\s\S]*?<\/footer>/, '');
  
  // Remove onMouseEnter and onMouseLeave
  code = code.replace(/\sonMouseEnter=\{.*?\}/g, '');
  code = code.replace(/\sonMouseLeave=\{.*?\}/g, '');
  
  // Remove 'cursor-none' from the outer div as Layout handles it (but if it misses it's okay)
  code = code.replace('cursor-none', '');
  
  fs.writeFileSync('src/components/Home.jsx', code);
}

function processAbout() {
  let code = fs.readFileSync('src/components/About.jsx', 'utf8');
  
  // Remove cursor states and useEffect
  code = code.replace(/const \[cursorPos.*?\n/g, '');
  code = code.replace(/const \[isHovered.*?\n/g, '');
  code = code.replace(/useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);\n\n/g, '');
  
  // Remove cursor div
  code = code.replace(/\{\/\* Custom Cursor \*\/\}[\s\S]*?mix-blend-difference"[\s\S]*?\/>/, '');
  
  // Remove Navbar
  code = code.replace(/<Navbar variant="dark" \/>\n/, '');
  
  // Remove footer
  code = code.replace(/\{\/\* Footer \*\/\}[\s\S]*?<\/footer>/, '');
  
  // Remove onMouseEnter and onMouseLeave
  code = code.replace(/\sonMouseEnter=\{.*?\}/g, '');
  code = code.replace(/\sonMouseLeave=\{.*?\}/g, '');

  code = code.replace('cursor-none', '');
  
  fs.writeFileSync('src/components/About.jsx', code);
}

function processExperiences() {
  let code = fs.readFileSync('src/components/Experiences.jsx', 'utf8');
  code = code.replace(/<Navbar variant="dark" \/>\n/, '');
  fs.writeFileSync('src/components/Experiences.jsx', code);
}

function processContact() {
  let code = fs.readFileSync('src/components/Contact.jsx', 'utf8');
  code = code.replace(/<Navbar variant="light" \/>\n/, '');
  fs.writeFileSync('src/components/Contact.jsx', code);
}

processHome();
processAbout();
processExperiences();
processContact();
