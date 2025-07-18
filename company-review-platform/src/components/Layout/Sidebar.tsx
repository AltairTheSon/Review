import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HomeIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { NavigationItem } from '../../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon
  },
  {
    name: 'Companies',
    href: '/companies',
    icon: BuildingOfficeIcon
  },
  {
    name: 'Search',
    href: '/search',
    icon: MagnifyingGlassIcon
  },
  {
    name: 'Reviews',
    href: '/reviews',
    icon: StarIcon
  },
  {
    name: 'Community',
    href: '/community',
    icon: UserGroupIcon
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: ChartBarIcon
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Cog6ToothIcon
  }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-dark-surface border-r border-gray-700 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-6 py-4">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">R</span>
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-white">Reviews</h1>
                <p className="text-xs text-gray-400">Company Review Platform</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 rounded-card text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-accent text-white shadow-accent-glow'
                      : 'text-gray-300 hover:text-white hover:bg-dark-card'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto bg-accent-purple text-white text-xs rounded-full px-2 py-1">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="flex-shrink-0 p-4 border-t border-gray-700">
            <div className="text-center text-xs text-gray-500">
              <p>© 2024 Reviews Platform</p>
              <p className="mt-1">Made with ❤️ for better reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-dark-surface border-r border-gray-700 lg:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Mobile header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <Link to="/" className="flex items-center space-x-3" onClick={onClose}>
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-white font-bold text-lg">Reviews</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-card text-gray-400 hover:text-white hover:bg-dark-card transition-colors duration-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={`flex items-center px-4 py-3 rounded-card text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-accent text-white shadow-accent-glow'
                      : 'text-gray-300 hover:text-white hover:bg-dark-card'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                  {item.badge && (
                    <span className="ml-auto bg-accent-purple text-white text-xs rounded-full px-2 py-1">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile footer */}
          <div className="flex-shrink-0 p-4 border-t border-gray-700">
            <div className="text-center text-xs text-gray-500">
              <p>© 2024 Reviews Platform</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;