import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HomeIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  StarIcon,
  UserCircleIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  BuildingOfficeIcon as BuildingOfficeIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  StarIcon as StarIconSolid,
  UserCircleIcon as UserCircleIconSolid
} from '@heroicons/react/24/solid';

const MobileNavigation: React.FC = () => {
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
      iconSolid: HomeIconSolid
    },
    {
      name: 'Companies',
      href: '/companies',
      icon: BuildingOfficeIcon,
      iconSolid: BuildingOfficeIconSolid
    },
    {
      name: 'Search',
      href: '/search',
      icon: MagnifyingGlassIcon,
      iconSolid: MagnifyingGlassIconSolid
    },
    {
      name: 'Reviews',
      href: '/reviews',
      icon: StarIcon,
      iconSolid: StarIconSolid
    },
    {
      name: 'Profile',
      href: '/profile',
      icon: UserCircleIcon,
      iconSolid: UserCircleIconSolid
    }
  ];

  return (
    <>
      {/* Quick action button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="action-button"
      >
        <PlusIcon className="h-6 w-6" />
      </motion.button>

      {/* Bottom navigation */}
      <div className="bottom-nav">
        <div className="bottom-nav-grid">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = isActive ? item.iconSolid : item.icon;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`mobile-nav-item ${
                  isActive ? 'mobile-nav-item-active' : ''
                }`}
              >
                <div className="flex flex-col items-center space-y-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <span className="text-xs font-medium">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;