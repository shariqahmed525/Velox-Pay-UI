import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Bell, Shield, Globe, CreditCard, User, Moon, Sun, Monitor, Smartphone, Mail, Lock, Eye, EyeOff, Download, Trash2 } from 'lucide-react';

const settingsCategories = [
  {
    id: 'general',
    title: 'General',
    icon: Settings,
    settings: [
      { id: 'language', title: 'Language', description: 'Choose your preferred language', type: 'select', value: 'English', options: ['English', 'Spanish', 'French', 'German'] },
      { id: 'currency', title: 'Default Currency', description: 'Primary currency for display', type: 'select', value: 'USD', options: ['USD', 'EUR', 'GBP', 'JPY'] },
      { id: 'timezone', title: 'Timezone', description: 'Your local timezone', type: 'select', value: 'UTC-8', options: ['UTC-8', 'UTC-5', 'UTC+0', 'UTC+1'] },
    ]
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    settings: [
      { id: 'push', title: 'Push Notifications', description: 'Receive notifications on your device', type: 'toggle', value: true },
      { id: 'email', title: 'Email Notifications', description: 'Get updates via email', type: 'toggle', value: true },
      { id: 'sms', title: 'SMS Notifications', description: 'Receive SMS for important updates', type: 'toggle', value: false },
      { id: 'marketing', title: 'Marketing Communications', description: 'Product updates and offers', type: 'toggle', value: false },
    ]
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: Shield,
    settings: [
      { id: '2fa', title: 'Two-Factor Authentication', description: 'Add an extra layer of security', type: 'toggle', value: true },
      { id: 'biometric', title: 'Biometric Login', description: 'Use fingerprint or face ID', type: 'toggle', value: true },
      { id: 'session', title: 'Auto-logout', description: 'Automatically log out after inactivity', type: 'select', value: '30 minutes', options: ['15 minutes', '30 minutes', '1 hour', '2 hours'] },
      { id: 'privacy', title: 'Data Privacy', description: 'Control how your data is used', type: 'button', value: 'Manage' },
    ]
  },
  {
    id: 'appearance',
    title: 'Appearance',
    icon: Monitor,
    settings: [
      { id: 'theme', title: 'Theme', description: 'Choose your preferred theme', type: 'theme', value: 'system' },
      { id: 'compact', title: 'Compact Mode', description: 'Show more content in less space', type: 'toggle', value: false },
      { id: 'animations', title: 'Animations', description: 'Enable interface animations', type: 'toggle', value: true },
    ]
  },
];

export const SettingsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [settings, setSettings] = useState(() => {
    const initialSettings: Record<string, any> = {};
    settingsCategories.forEach(category => {
      category.settings.forEach(setting => {
        initialSettings[setting.id] = setting.value;
      });
    });
    return initialSettings;
  });

  const updateSetting = (id: string, value: any) => {
    setSettings(prev => ({ ...prev, [id]: value }));
  };

  const activeSettings = settingsCategories.find(cat => cat.id === activeCategory)?.settings || [];

  const renderSettingControl = (setting: any) => {
    switch (setting.type) {
      case 'toggle':
        return (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => updateSetting(setting.id, !settings[setting.id])}
            className={`w-12 h-6 rounded-full transition-colors ${
              settings[setting.id] ? 'bg-primary' : 'bg-light-border dark:bg-dark-border'
            }`}
          >
            <motion.div
              animate={{ x: settings[setting.id] ? 24 : 2 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5 bg-white rounded-full shadow-sm"
            />
          </motion.button>
        );
      case 'select':
        return (
          <select
            value={settings[setting.id]}
            onChange={(e) => updateSetting(setting.id, e.target.value)}
            className="bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl px-3 py-2 text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
          >
            {setting.options.map((option: string) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'theme':
        return (
          <div className="flex items-center bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl p-1">
            {[
              { value: 'light', icon: Sun, label: 'Light' },
              { value: 'dark', icon: Moon, label: 'Dark' },
              { value: 'system', icon: Monitor, label: 'System' },
            ].map((theme) => (
              <motion.button
                key={theme.value}
                onClick={() => updateSetting(setting.id, theme.value)}
                className={`relative p-2 rounded-lg transition-colors ${
                  settings[setting.id] === theme.value
                    ? 'text-primary'
                    : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <theme.icon className="w-4 h-4" />
                {settings[setting.id] === theme.value && (
                  <motion.div
                    layoutId="activeTheme"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        );
      case 'button':
        return (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl hover:bg-primary/20 transition-colors"
          >
            {setting.value}
          </motion.button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-display">Settings</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Customize your VeloxPay experience</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Categories */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-4 shadow-glass">
            <nav className="space-y-2">
              {settingsCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-light-text dark:text-dark-text hover:bg-light-glass dark:hover:bg-dark-glass'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title}</span>
                </motion.button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Settings Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass">
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display mb-6">
              {settingsCategories.find(cat => cat.id === activeCategory)?.title}
            </h3>
            
            <div className="space-y-6">
              {activeSettings.map((setting, index) => (
                <motion.div
                  key={setting.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-light-glass dark:bg-dark-glass rounded-xl"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-light-text dark:text-dark-text">{setting.title}</h4>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{setting.description}</p>
                  </div>
                  <div className="ml-4">
                    {renderSettingControl(setting)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Account Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display mb-6">Account Management</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl hover:border-primary/30 transition-colors"
          >
            <Download className="w-5 h-5 text-primary" />
            <div className="text-left">
              <h4 className="font-medium text-light-text dark:text-dark-text">Export Data</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Download your account data</p>
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl hover:border-primary/30 transition-colors"
          >
            <Lock className="w-5 h-5 text-primary" />
            <div className="text-left">
              <h4 className="font-medium text-light-text dark:text-dark-text">Change Password</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Update your account password</p>
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl hover:border-primary/30 transition-colors"
          >
            <User className="w-5 h-5 text-primary" />
            <div className="text-left">
              <h4 className="font-medium text-light-text dark:text-dark-text">Account Verification</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Verify your identity</p>
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 bg-error/10 border border-error/20 rounded-xl hover:bg-error/20 transition-colors"
          >
            <Trash2 className="w-5 h-5 text-error" />
            <div className="text-left">
              <h4 className="font-medium text-error">Delete Account</h4>
              <p className="text-sm text-error/80">Permanently delete your account</p>
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Save Changes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-end space-x-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text hover:border-primary/30 transition-colors"
        >
          Reset to Defaults
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:shadow-glow transition-all"
        >
          Save Changes
        </motion.button>
      </motion.div>
    </div>
  );
};