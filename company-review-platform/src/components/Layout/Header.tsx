import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bars3Icon, 
  MagnifyingGlassIcon, 
  BellIcon, 
  UserCircleIcon,
  SunIcon,
  MoonIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, Transition } from '@headlessui/react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-dark-surface/80 backdrop-blur-glass border-b border-gray-700">
      <div className="lg:pl-64">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-card text-gray-400 hover:text-white hover:bg-dark-card transition-colors duration-300"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Logo for mobile */}
          <Link to="/" className="lg:hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-white font-bold text-lg">Reviews</span>
            </motion.div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search companies, reviews, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
              />
            </form>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-card text-gray-400 hover:text-white hover:bg-dark-card transition-colors duration-300"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Notifications */}
            <button className="p-2 rounded-card text-gray-400 hover:text-white hover:bg-dark-card transition-colors duration-300 relative">
              <BellIcon className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent-purple rounded-full flex items-center justify-center text-xs text-white">
                3
              </span>
            </button>

            {/* User menu */}
            {user ? (
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center space-x-3 p-2 rounded-card hover:bg-dark-card transition-colors duration-300">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  )}
                  <span className="hidden md:block text-white font-medium">
                    {user.name}
                  </span>
                </Menu.Button>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-dark-surface rounded-card shadow-lg border border-gray-700 py-1 z-50">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`flex items-center px-4 py-2 text-sm ${
                            active ? 'bg-dark-card text-white' : 'text-gray-300'
                          }`}
                        >
                          <UserCircleIcon className="h-4 w-4 mr-3" />
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/settings"
                          className={`flex items-center px-4 py-2 text-sm ${
                            active ? 'bg-dark-card text-white' : 'text-gray-300'
                          }`}
                        >
                          <Cog6ToothIcon className="h-4 w-4 mr-3" />
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <hr className="my-1 border-gray-700" />
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`flex items-center w-full px-4 py-2 text-sm ${
                            active ? 'bg-dark-card text-white' : 'text-gray-300'
                          }`}
                        >
                          <ArrowRightOnRectangleIcon className="h-4 w-4 mr-3" />
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="btn-secondary text-sm px-4 py-2"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="btn-primary text-sm px-4 py-2"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;