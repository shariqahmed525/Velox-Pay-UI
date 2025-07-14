import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { WalletOverview } from './components/WalletOverview';
import { TransactionTimeline } from './components/TransactionTimeline';
import { ExchangeRates } from './components/ExchangeRates';
import { CTAStrip } from './components/CTAStrip';
import { InsightsPage } from './components/InsightsPage';
import { TransfersPage } from './components/TransfersPage';
import { NotificationsPage } from './components/NotificationsPage';
import { ProfilePage } from './components/ProfilePage';
import { SettingsPage } from './components/SettingsPage';

function App() {
  const [activeSection, setActiveSection] = useState('wallet');

  const renderMainContent = () => {
    switch (activeSection) {
      case 'wallet':
        return (
          <div className="space-y-8">
            <WalletOverview />
            <TransactionTimeline />
          </div>
        );
      case 'exchange':
        return <ExchangeRates />;
      case 'transfers':
        return <TransfersPage />;
      case 'insights':
        return <InsightsPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'profile':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return (
          <div className="space-y-8">
            <WalletOverview />
            <TransactionTimeline />
          </div>
        );
    }
  };

  return (
    <ThemeProvider>
      <AppContent activeSection={activeSection} setActiveSection={setActiveSection} renderMainContent={renderMainContent} />
    </ThemeProvider>
  );
}

const AppContent: React.FC<{
  activeSection: string;
  setActiveSection: (section: string) => void;
  renderMainContent: () => React.ReactNode;
}> = ({ activeSection, setActiveSection, renderMainContent }) => {
  return (
    <div className="min-h-screen bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text font-sans transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 dark:bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="flex h-screen relative">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar activeSection={activeSection} onSectionChange={setActiveSection} />
          
          {/* Content Area */}
          <div className="flex-1 overflow-auto pb-20">
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {renderMainContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <CTAStrip />
    </div>
  );
};

export default App;