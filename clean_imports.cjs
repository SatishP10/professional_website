const fs = require('fs');
let code = fs.readFileSync('src/components/Home.jsx', 'utf8');

// Remove useScroll and useTransform
code = code.replace(/import \{ motion, useScroll, useTransform \} from 'framer-motion';/, "import { motion } from 'framer-motion';");

// Remove scrollYProgress and yBg
code = code.replace(/  const \{ scrollYProgress \} = useScroll\(\);\n  const yBg = useTransform\(scrollYProgress, \[0, 1\], \["0%", "-20%"\]\);\n/, "");

fs.writeFileSync('src/components/Home.jsx', code);
