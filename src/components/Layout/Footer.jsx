import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full py-12 px-8 flex flex-col items-center justify-center gap-6 mt-20 border-t border-zinc-200 dark:border-white/5"
    >
      <div className="flex items-center gap-8">
        <a
          href="https://github.com/antoniodroioz"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/antoniodroioz"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
      </div>

      <p className="text-sm text-gray-500 font-mono">
        © {currentYear} antoniodroioz
      </p>
    </motion.footer>
  );
}
