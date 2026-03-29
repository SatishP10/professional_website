const fs = require('fs');
let code = fs.readFileSync('src/components/Home.jsx', 'utf8');

const oldWrapper = '<div className="relative w-full min-h-screen flex flex-col bg-[#050505] text-zinc-100 overflow-hidden cursor-none">';
const newWrapper = '<div className="relative w-full min-h-screen flex flex-col bg-[#050505] bg-[url(\'/pictures/homePageBackground.jpg\')] bg-cover bg-center bg-no-repeat text-zinc-100 overflow-hidden cursor-none">';
code = code.replace(oldWrapper, newWrapper);

const parallaxRegex = /\{\/\* Background with Parallax \*\/\}\s*<motion\.div[\s\S]*?<\/motion\.div>/;
const overlay = '{/* Vignette Overlay */}\n      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/70 pointer-events-none z-0" />';
code = code.replace(parallaxRegex, overlay);

const oldHero = '<section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-4 shrink-0">';
const newHero = '<section id="hero" className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 shrink-0">';
code = code.replace(oldHero, newHero);

const oldNav = '<section id="navigation" className="h-screen flex flex-col justify-center items-center px-4 shrink-0">';
const newNav = '<section id="navigation" className="relative z-10 h-screen flex flex-col justify-center items-center px-4 shrink-0">';
code = code.replace(oldNav, newNav);

fs.writeFileSync('src/components/Home.jsx', code);
