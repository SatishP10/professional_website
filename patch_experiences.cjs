const fs = require('fs');

let content = fs.readFileSync('src/components/Experiences.jsx', 'utf8');

// Import framer-motion
content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { motion } from 'framer-motion';");

// Update ExpandableCard
content = content.replace("const ExpandableCard = ({ title, subtitle, isPill = false }) => {", "const ExpandableCard = ({ title, subtitle, isPill = false, variants }) => {");
content = content.replace("<div\n      onClick={() => setIsOpen(!isOpen)}", "<motion.div\n      variants={variants}\n      onClick={() => setIsOpen(!isOpen)}");
content = content.replace("</div>\n  );\n};", "</motion.div>\n  );\n};");

// Add animation variants to Experiences component
const animationCode = `
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
`;
content = content.replace("return (", animationCode);

// Update section and h2 tags
content = content.replace(/<section>/g, '<motion.section\n          variants={containerVariants}\n          initial="hidden"\n          whileInView="visible"\n          viewport={{ once: true, amount: 0.1 }}\n        >');
content = content.replace(/<section className="mt-24">/g, '<motion.section\n          className="mt-24"\n          variants={containerVariants}\n          initial="hidden"\n          whileInView="visible"\n          viewport={{ once: true, amount: 0.1 }}\n        >');
content = content.replace(/<section className="mt-24 mb-12">/g, '<motion.section\n          className="mt-24 mb-12"\n          variants={containerVariants}\n          initial="hidden"\n          whileInView="visible"\n          viewport={{ once: true, amount: 0.1 }}\n        >');

content = content.replace(/<\/section>/g, '</motion.section>');

// Replace all <h2 with <motion.h2 variants={itemVariants}
content = content.replace(/<h2 className="/g, '<motion.h2 variants={itemVariants} className="');
content = content.replace(/<\/h2>/g, '</motion.h2>');

// Pass variants to ExpandableCard
content = content.replace(/<ExpandableCard/g, '<ExpandableCard variants={itemVariants}');

fs.writeFileSync('src/components/Experiences.jsx', content);
