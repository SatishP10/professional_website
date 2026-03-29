const fs = require('fs');
let code = fs.readFileSync('src/components/Home.jsx', 'utf8');

// 1. Add import for Link
code = code.replace(
  "import { motion } from 'framer-motion';",
  "import { motion } from 'framer-motion';\nimport { Link } from 'react-router-dom';"
);

// 2. Replace the a tags for About, Experiences, Contact
code = code.replace(
  /<a\s+href="#about"\s+className="relative([^"]+)"([\s\S]*?)>\s*About Me\s*<\/a>/g,
  '<Link to="/about" className="relative$1"$2>\n              About Me\n            </Link>'
);

code = code.replace(
  /<a\s+href="#experiences"\s+className="relative([^"]+)"([\s\S]*?)>\s*Experiences\s*<\/a>/g,
  '<Link to="/experiences" className="relative$1"$2>\n              Experiences\n            </Link>'
);

code = code.replace(
  /<a\s+href="#contact"\s+className="relative([^"]+)"([\s\S]*?)>\s*Contact\s*<\/a>/g,
  '<Link to="/contact" className="relative$1"$2>\n              Contact\n            </Link>'
);

fs.writeFileSync('src/components/Home.jsx', code);
