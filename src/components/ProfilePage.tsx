import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Calendar, Shield, Camera, Edit3, Save, X, Star, Award, TrendingUp } from 'lucide-react';

const userStats = [
  { label: 'Total Transactions', value: '1,247', icon: TrendingUp, color: 'text-primary' },
  { label: 'Countries Sent To', value: '23', icon: MapPin, color: 'text-success' },
  { label: 'Member Since', value: '2021', icon: Calendar, color: 'text-info' },
  { label: 'Trust Score', value: '98%', icon: Shield, color: 'text-warning' },
];

const achievements = [
  { title: 'Global Sender', description: 'Sent money to 20+ countries', icon: '🌍', earned: true },
  { title: 'Frequent User', description: 'Made 1000+ transactions', icon: '⚡', earned: true },
  { title: 'Early Adopter', description: 'Joined in the first year', icon: '🚀', earned: true },
  { title: 'High Volume', description: 'Transferred $100K+ total', icon: '💎', earned: false },
];

export const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA, USA',
    dateOfBirth: '1990-05-15',
    occupation: 'Software Engineer',
    company: 'Tech Corp Inc.',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data logic here
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
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-display">Profile</h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Manage your account information and preferences</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
            isEditing
              ? 'bg-error/10 text-error border border-error/20 hover:bg-error/20'
              : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
          }`}
        >
          {isEditing ? <X className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
          <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
        </motion.button>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-glass"
      >
        <div className="flex items-start space-x-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-2xl">JD</span>
              </div>
              {isEditing && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <Camera className="w-4 h-4 text-white" />
                </motion.button>
              )}
            </div>
            <div className="text-center">
              <div className="flex items-center space-x-1 mb-1">
                <Star className="w-4 h-4 text-warning fill-current" />
                <span className="text-sm font-medium text-light-text dark:text-dark-text">Premium Member</span>
              </div>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">Verified Account</p>
            </div>
          </div>

          {/* Profile Information */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-light-text dark:text-dark-text font-medium">{profileData.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-light-text dark:text-dark-text font-medium">{profileData.lastName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-light-text dark:text-dark-text font-medium">{profileData.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-light-text dark:text-dark-text font-medium">{profileData.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-light-text dark:text-dark-text font-medium">{profileData.address}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                    className="w-full px-4 py-3 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-light-text dark:text-dark-text focus:outline-none focus:border-primary/50 transition-colors"
                  />
                ) : (
                  <p className="text-light-text dark:text-dark-text font-medium">{new Date(profileData.dateOfBirth).toLocaleDateString()}</p>
                )}
              </div>
            </div>

            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex space-x-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCancel}
                  className="flex items-center space-x-2 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border px-6 py-3 rounded-xl text-light-text dark:text-dark-text hover:border-primary/30 transition-all"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text font-display">{stat.value}</h3>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Award className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display">Achievements</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
                achievement.earned
                  ? 'bg-primary/10 border border-primary/20'
                  : 'bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border opacity-60'
              }`}
            >
              <div className="text-2xl">{achievement.icon}</div>
              <div className="flex-1">
                <h4 className={`font-medium ${
                  achievement.earned 
                    ? 'text-primary' 
                    : 'text-light-text-secondary dark:text-dark-text-secondary'
                }`}>
                  {achievement.title}
                </h4>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {achievement.description}
                </p>
              </div>
              {achievement.earned && (
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Account Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display">Account Security</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-light-glass dark:bg-dark-glass rounded-xl">
              <div>
                <h4 className="font-medium text-light-text dark:text-dark-text">Two-Factor Authentication</h4>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Extra security for your account</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full flex items-center">
                <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-light-glass dark:bg-dark-glass rounded-xl">
              <div>
                <h4 className="font-medium text-light-text dark:text-dark-text">Email Notifications</h4>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Get notified of account activity</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full flex items-center">
                <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-left hover:border-primary/30 transition-colors"
            >
              <h4 className="font-medium text-light-text dark:text-dark-text">Change Password</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Update your account password</p>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 bg-light-glass dark:bg-dark-glass border border-light-border dark:border-dark-border rounded-xl text-left hover:border-primary/30 transition-colors"
            >
              <h4 className="font-medium text-light-text dark:text-dark-text">Login History</h4>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">View recent account access</p>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};