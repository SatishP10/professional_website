const fs = require('fs');
let code = fs.readFileSync('src/components/Home.jsx', 'utf8');

// Update outermost div
code = code.replace(
  '<div className="relative w-full min-h-screen flex flex-col bg-[#050505] text-zinc-100 overflow-hidden cursor-none">',
  '<div className="relative w-full min-h-screen flex flex-col bg-[#050505] bg-[url(\'/pictures/homePageBackground.jpg\')] bg-cover bg-center bg-no-repeat text-zinc-100 overflow-hidden cursor-none">'
);

// Remove parallax background
code = code.replace(
  /\{\/\* Background with Parallax \*\/\}\s*<motion\.div\s*className="absolute inset-0 w-full h-\[120%\] z-\[-1\]"\s*style=\{\{ y: yBg \}\}\s*>\s*<div\s*className="absolute inset-0 bg-cover bg-center bg-no-repeat"\s*style=\{\{ backgroundImage: "url\('\/pictures\/homePageBackground\.jpg'\)" \}\}\s*\/>\s*<div className="absolute inset-0 bg-gradient-to-b from-black\/60 via-black\/30 to-black\/60" \/>\s*<\/motion\.div>/,
  '{/* Vignette Overlay */}\n      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/70 pointer-events-none z-0" />'
);

// Bring z-index up for the sections to be above the overlay
code = code.replace(
  '<section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-4 shrink-0">',
  '<section id="hero" className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 shrink-0">'
);
code = code.replace(
  '<section id="navigation" className="h-screen flex flex-col justify-center items-center px-4 shrink-0">',
  '<section id="navigation" className="relative z-10 h-screen flex flex-col justify-center items-center px-4 shrink-0">'
);

fs.writeFileSync('src/components/Home.jsx', code);
