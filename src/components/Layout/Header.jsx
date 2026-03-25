import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full h-20 flex items-center justify-between px-8 md:px-16 fixed top-0 left-0 z-50 backdrop-blur-sm border-b border-zinc-200 dark:border-white/5"
    >
      <div className="w-1/3" /> {/* Spacer */}
      
      <div className="w-1/3 flex justify-center">
        <h1 className="text-xl font-bold tracking-tighter text-gradient">
          antoniodroioz
        </h1>
      </div>

      <div className="w-1/3 flex justify-end">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full glass-card hover:scale-110 transition-transform"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-malachite" />
          ) : (
            <Moon className="w-5 h-5 text-emerald" />
          )}
        </button>
      </div>
    </motion.header>
  );
}
