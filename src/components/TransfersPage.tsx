import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Clock, CheckCircle, AlertCircle, Plus, Search, Filter, Globe, Zap, Shield } from 'lucide-react';

const recentTransfers = [
  {
    id: 1,
    recipient: 'Sarah Johnson',
    email: 'sarah@example.com',
    amount: 2500,
    currency: 'USD',
    status: 'completed',
    date: '2024-01-15',
    flag: '🇺🇸',
    method: 'Bank Transfer'
  },
  {
    id: 2,
    recipient: 'Marcus Weber',
    email: 'marcus@example.com',
    amount: 1840,
    currency: 'EUR',
    status: 'pending',
    date: '2024-01-14',
    flag: '🇩🇪',
    method: 'Instant Transfer'
  },
  {
    id: 3,
    recipient: 'Emma Thompson',
    email: 'emma@example.com',
    amount: 750,
    currency: 'GBP',
    status: 'completed',
    date: '2024-01-13',
    flag: '🇬🇧',
    method: 'Mobile Wallet'
  },
  {
    id: 4,
    recipient: 'Yuki Tanaka',
    email: 'yuki@example.com',
    amount: 125000,
    currency: 'JPY',
    status: 'failed',
    date: '2024-01-12',
    flag: '🇯🇵',
    method: 'Wire Transfer'
  },
];

const quickContacts = [
  { name: 'Alice Chen', email: 'alice@example.com', avatar: 'AC', flag: '🇨🇦' },
  { name: 'Bob Smith', email: 'bob@example.com', avatar: 'BS', flag: '🇺🇸' },
  { name: 'Carlos Rodriguez', email: 'carlos@example.com', avatar: 'CR', flag: '🇪🇸' },
  { name: 'Diana Kim', email: 'diana@example.com', avatar: 'DK', flag: '🇰🇷' },
];

const statusColors = {
  completed: 'text-success bg-success/20',
  pending: 'text-warning bg-warning/20',
  failed: 'text-error bg-error/20',
};

const statusIcons = {
  completed: CheckCircle,
  pending: Clock,
  failed: AlertCircle,
};

export const TransfersPage: React.FC = () => {
  const [showNewTransfer, setShowNewTransfer] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-display">International Transfers</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Send money globally with real-time tracking</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowNewTransfer(true)}
          className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>New Transfer</span>
        </motion.button>
      </motion.div>

      {/* Features Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-full">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-light-text dark:text-dark-text">Instant Transfers</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Money arrives in seconds</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-full">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-light-text dark:text-dark-text">Bank-Level Security</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">256-bit encryption</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-full">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-light-text dark:text-dark-text">Global Reach</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">180+ countries</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display mb-4">Quick Send</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickContacts.map((contact, index) => (
            <motion.button
              key={contact.email}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-light-glass dark:hover:bg-dark-glass transition-colors"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{contact.avatar}</span>
                </div>
                <span className="absolute -bottom-1 -right-1 text-lg">{contact.flag}</span>
              </div>
              <div className="text-center">
                <p className="font-medium text-light-text dark:text-dark-text text-sm">{contact.name}</p>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{contact.email}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Transfer History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display">Recent Transfers</h3>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
              <input
                type="text"
                placeholder="Search transfers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <button className="p-2 bg-light-glass dark:bg-dark-glass rounded-xl hover:bg-primary/10 transition-colors">
              <Filter className="w-5 h-5 text-light-text dark:text-dark-text" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {recentTransfers.map((transfer, index) => {
            const StatusIcon = statusIcons[transfer.status as keyof typeof statusIcons];
            return (
              <motion.div
                key={transfer.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-light-glass dark:hover:bg-dark-glass transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl">{transfer.flag}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-medium text-light-text dark:text-dark-text">{transfer.recipient}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[transfer.status as keyof typeof statusColors]}`}>
                      <StatusIcon className="w-3 h-3 inline mr-1" />
                      {transfer.status}
                    </span>
                  </div>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{transfer.email}</p>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{transfer.method} • {transfer.date}</p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-light-text dark:text-dark-text">
                    -{transfer.amount.toLocaleString()} {transfer.currency}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text hover:border-primary/30 hover:text-primary transition-all font-medium duration-300"
        >
          View All Transfers
        </motion.button>
      </motion.div>

      {/* New Transfer Modal */}
      <AnimatePresence>
        {showNewTransfer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewTransfer(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display mb-4">New Transfer</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Recipient Email</label>
                  <input
                    type="email"
                    placeholder="recipient@example.com"
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Amount</label>
                  <div className="flex">
                    <select className="bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-l-xl px-3 py-3 text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                      <option>JPY</option>
                    </select>
                    <input
                      type="number"
                      placeholder="1000"
                      className="flex-1 px-4 py-3 bg-light-glass dark:bg-dark-glass border border-l-0 border-light-border dark:border-dark-border rounded-r-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Message (Optional)</label>
                  <textarea
                    placeholder="Add a note..."
                    rows={3}
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => setShowNewTransfer(false)}
                    className="flex-1 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text hover:border-primary/30 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:shadow-glow transition-all">
                    Send Money
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};