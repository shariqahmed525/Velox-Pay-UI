import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, Calendar, Target, Award } from 'lucide-react';

const spendingCategories = [
  { name: 'Business', amount: 4250, percentage: 35, color: 'bg-primary', change: +12 },
  { name: 'Travel', amount: 2890, percentage: 24, color: 'bg-info', change: -5 },
  { name: 'Shopping', amount: 1850, percentage: 15, color: 'bg-warning', change: +8 },
  { name: 'Food & Dining', amount: 1420, percentage: 12, color: 'bg-success', change: +3 },
  { name: 'Entertainment', amount: 980, percentage: 8, color: 'bg-pink-500', change: -2 },
  { name: 'Other', amount: 610, percentage: 6, color: 'bg-gray-500', change: +1 },
];

const monthlyTrends = [
  { month: 'Jan', income: 8500, expenses: 6200 },
  { month: 'Feb', income: 9200, expenses: 6800 },
  { month: 'Mar', income: 8800, expenses: 7100 },
  { month: 'Apr', income: 9500, expenses: 6900 },
  { month: 'May', income: 10200, expenses: 7400 },
  { month: 'Jun', income: 9800, expenses: 7200 },
];

const goals = [
  { name: 'Emergency Fund', current: 8500, target: 15000, color: 'bg-success' },
  { name: 'Vacation Savings', current: 3200, target: 5000, color: 'bg-info' },
  { name: 'Investment Portfolio', current: 12000, target: 20000, color: 'bg-primary' },
];

export const InsightsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text font-display">Financial Insights</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">Understand your spending patterns and financial health</p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Monthly Income', value: '$9,800', change: '+12%', icon: TrendingUp, positive: true },
          { title: 'Monthly Expenses', value: '$7,200', change: '+5%', icon: TrendingDown, positive: false },
          { title: 'Net Savings', value: '$2,600', change: '+28%', icon: DollarSign, positive: true },
          { title: 'Savings Rate', value: '26.5%', change: '+3.2%', icon: Target, positive: true },
        ].map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="w-8 h-8 text-primary" />
              <div className={`flex items-center space-x-1 ${metric.positive ? 'text-success' : 'text-error'}`}>
                {metric.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text font-display">{metric.value}</h3>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{metric.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Spending Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display">Spending by Category</h3>
          <PieChart className="w-6 h-6 text-primary" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories List */}
          <div className="space-y-4">
            {spendingCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-light-glass dark:hover:bg-dark-glass transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${category.color}`} />
                  <div>
                    <p className="font-medium text-light-text dark:text-dark-text">{category.name}</p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{category.percentage}% of total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-light-text dark:text-dark-text">${category.amount.toLocaleString()}</p>
                  <p className={`text-sm ${category.change >= 0 ? 'text-success' : 'text-error'}`}>
                    {category.change > 0 ? '+' : ''}{category.change}%
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Chart Placeholder */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
            >
              <div className="w-32 h-32 rounded-full bg-light-surface dark:bg-dark-surface flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">$12.1K</p>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Total Spent</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Monthly Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display">Income vs Expenses</h3>
          <BarChart3 className="w-6 h-6 text-primary" />
        </div>
        
        <div className="space-y-4">
          {monthlyTrends.map((month, index) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                {month.month}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-success">Income</span>
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">${month.income.toLocaleString()}</span>
                </div>
                <div className="w-full bg-light-glass dark:bg-dark-glass rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(month.income / 12000) * 100}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-2 bg-success rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-error">Expenses</span>
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">${month.expenses.toLocaleString()}</span>
                </div>
                <div className="w-full bg-light-glass dark:bg-dark-glass rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(month.expenses / 12000) * 100}%` }}
                    transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                    className="h-2 bg-error rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Financial Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border dark:border-dark-border rounded-2xl p-6 shadow-glass"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-light-text dark:text-dark-text font-display">Financial Goals</h3>
          <Award className="w-6 h-6 text-primary" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="p-4 rounded-xl bg-light-glass dark:bg-dark-glass"
            >
              <h4 className="font-medium text-light-text dark:text-dark-text mb-2">{goal.name}</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round((goal.current / goal.target) * 100)}%
                </span>
              </div>
              <div className="w-full bg-light-border dark:bg-dark-border rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(goal.current / goal.target) * 100}%` }}
                  transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  className={`h-2 rounded-full ${goal.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};