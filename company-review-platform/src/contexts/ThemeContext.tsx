import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const defaultTheme: Theme = {
  mode: 'dark',
  colors: {
    primary: '#0f172a',
    secondary: '#1e3a8a',
    accent: '#8B5CF6',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#ffffff'
  }
};

const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    accent: '#8B5CF6',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1e293b'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme(lightTheme);
      document.documentElement.classList.remove('dark');
    } else {
      setTheme(defaultTheme);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme.mode === 'dark' ? lightTheme : defaultTheme;
    setTheme(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme.mode);
    
    // Update document class
    if (newTheme.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    isDark: theme.mode === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};