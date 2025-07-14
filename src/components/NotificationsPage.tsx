import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Check, X, AlertCircle, TrendingUp, Send, CreditCard, Settings, Filter, MoreVertical } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'transaction',
    title: 'Payment Received',
    message: 'You received $1,840 EUR from Marcus Weber',
    time: '2 minutes ago',
    read: false,
    icon: TrendingUp,
    color: 'text-success bg-success/20'
  },
  {
    id: 2,
    type: 'security',
    title: 'Security Alert',
    message: 'New device login detected from Berlin, Germany',
    time: '1 hour ago',
    read: false,
    icon: AlertCircle,
    color: 'text-warning bg-warning/20'
  },
  {
    id: 3,
    type: 'transfer',
    title: 'Transfer Completed',
    message: 'Your transfer to Sarah Johnson has been completed',
    time: '3 hours ago',
    read: true,
    icon: Send,
    color: 'text-info bg-info/20'
  },
  {
    id: 4,
    type: 'card',
    title: 'Card Payment',
    message: 'Card ending in 4532 was used for $89.99 at British Airways',
    time: '1 day ago',
    read: true,
    icon: CreditCard,
    color: 'text-primary bg-primary/20'
  },
  {
    id: 5,
    type: 'system',
    title: 'Account Update',
    message: 'Your account verification has been completed',
    time: '2 days ago',
    read: true,
    icon: Settings,
    color: 'text-gray-500 bg-gray-500/20'
  },
  {
    id: 6,
    type: 'transaction',
    title: 'Exchange Rate Alert',
    message: 'EUR/USD rate reached your target of 1.0900',
    time: '3 days ago',
    read: true,
    icon: TrendingUp,
    color: 'text-success bg-success/20'
  },
];

const notificationTypes = [
  { id: 'all', label: 'All', count: notifications.length },
  { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
  { id: 'transaction', label: 'Transactions', count: notifications.filter(n => n.type === 'transaction').length },
  { id: 'security', label: 'Security', count: notifications.filter(n => n.type === 'security').length },
];

export const NotificationsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState<number[]>([]);

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unread') return !notification.read;
    return notification.type === activeFilter;
  });

  const toggleNotificationSelection = (id: number) => {
    setSelectedNotifications(prev => 
      prev.includes(id) 
        ? prev.filter(nId => nId !== id)
        : [...prev, id]
    );
  };

  const markAllAsRead = () => {
    // Implementation for marking all as read
  };

  const deleteSelected = () => {
    // Implementation for deleting selected notifications
    setSelectedNotifications([]);
  };

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
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-display">Notifications</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Stay updated with your account activity</p>
        </div>
        <div className="flex items-center space-x-3">
          {selectedNotifications.length > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={deleteSelected}
              className="flex items-center space-x-2 px-4 py-2 bg-error/10 text-error border border-error/20 rounded-xl hover:bg-error/20 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Delete ({selectedNotifications.length})</span>
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={markAllAsRead}
            className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl hover:bg-primary/20 transition-colors"
          >
            <Check className="w-4 h-4" />
            <span>Mark All Read</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-2"
      >
        <div className="flex space-x-2">
          {notificationTypes.map((type) => (
            <motion.button
              key={type.id}
              onClick={() => setActiveFilter(type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                activeFilter === type.id
                  ? 'bg-primary text-white shadow-glow'
                  : 'text-light-text dark:text-dark-text hover:bg-light-glass dark:hover:bg-dark-glass'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">{type.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === type.id
                  ? 'bg-white/20 text-white'
                  : 'bg-light-glass dark:bg-dark-glass text-light-text-secondary dark:text-dark-text-secondary'
              }`}>
                {type.count}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Notifications List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl shadow-glass overflow-hidden"
      >
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Bell className="w-12 h-12 text-light-text-secondary dark:text-dark-text-secondary mb-4" />
            <h3 className="text-lg font-medium text-light-text dark:text-dark-text mb-2">No notifications</h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">You're all caught up!</p>
          </div>
        ) : (
          <div className="divide-y divide-light-border dark:divide-dark-border">
            {filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className={`flex items-start space-x-4 p-6 hover:bg-light-glass dark:hover:bg-dark-glass transition-colors group ${
                  !notification.read ? 'bg-primary/5' : ''
                }`}
              >
                {/* Selection Checkbox */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleNotificationSelection(notification.id)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    selectedNotifications.includes(notification.id)
                      ? 'bg-primary border-primary'
                      : 'border-light-border dark:border-dark-border hover:border-primary/50'
                  }`}
                >
                  {selectedNotifications.includes(notification.id) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </motion.button>

                {/* Notification Icon */}
                <div className={`p-2 rounded-full ${notification.color}`}>
                  <notification.icon className="w-5 h-5" />
                </div>

                {/* Notification Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className={`font-medium ${
                        !notification.read 
                          ? 'text-light-text dark:text-dark-text' 
                          : 'text-light-text-secondary dark:text-dark-text-secondary'
                      }`}>
                        {notification.title}
                      </h4>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-2">
                        {notification.time}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      )}
                      <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-light-glass dark:hover:bg-dark-glass rounded transition-all">
                        <MoreVertical className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display mb-4">Notification Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Transaction Alerts', description: 'Get notified about all transactions', enabled: true },
            { title: 'Security Notifications', description: 'Important security updates', enabled: true },
            { title: 'Exchange Rate Alerts', description: 'Rate changes for your currencies', enabled: false },
            { title: 'Marketing Updates', description: 'Product news and offers', enabled: false },
          ].map((setting, index) => (
            <motion.div
              key={setting.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-xl bg-light-glass dark:bg-dark-glass"
            >
              <div>
                <h4 className="font-medium text-light-text dark:text-dark-text">{setting.title}</h4>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{setting.description}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-6 rounded-full transition-colors ${
                  setting.enabled ? 'bg-primary' : 'bg-light-border dark:bg-dark-border'
                }`}
              >
                <motion.div
                  animate={{ x: setting.enabled ? 24 : 2 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 bg-white rounded-full shadow-sm"
                />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};