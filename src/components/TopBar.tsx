import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Globe } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface TopBarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-glass border-b border-light-border dark:border-dark-border px-8 py-4 flex items-center justify-between sticky top-0 z-50 transition-colors duration-300"
    >
      {/* Left section */}
      <div className="flex items-center space-x-6">
        {/* Search input removed */}
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-6">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Trust indicators */}
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-light-glass dark:bg-dark-glass px-3 py-2 rounded-full transition-colors duration-300"
          >
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-xs text-light-text dark:text-dark-text">Encrypted</span>
          </motion.div>
        </div>

        {/* Notifications */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSectionChange('notifications')}
          className={`relative p-2 rounded-full transition-colors duration-300 ${
            activeSection === 'notifications' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-light-glass dark:bg-dark-glass hover:bg-primary/10 text-light-text dark:text-dark-text hover:text-primary'
          }`}
        >
          <Bell className="w-5 h-5" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
          />
        </motion.button>

        {/* User avatar */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSectionChange('profile')}
          className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all ${
            activeSection === 'profile'
              ? 'bg-primary shadow-glow'
              : 'bg-primary hover:shadow-glow'
          }`}
        >
          <span className="text-white font-bold text-sm">JD</span>
        </motion.button>
      </div>
    </motion.div>
  );
};