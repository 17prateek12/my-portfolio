'use client';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

export interface ThemeContextType {
  darkMode: 'light' | 'dark';
  switchDark: () => void;
  switchLight: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check if theme was saved previously or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setDarkMode(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const switchDark = () => setDarkMode('dark');
  const switchLight = () => setDarkMode('light');

  return (
    <ThemeContext.Provider value={{ darkMode, switchDark, switchLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
