'use client';
import React, { useContext } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import ThemeContext from '@/context/ThemeContext';

export const DarkModeToggle: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { darkMode, switchDark, switchLight } = context;

  const toggleTheme = () => {
    if (darkMode === 'dark') {
      switchLight();
    } else {
      switchDark();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle Dark Mode"
    >
      <div style={{ position: 'relative', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {darkMode === 'dark' ? (
          <FiMoon style={{ color: '#fbbf24', fontSize: '1.25rem', transition: 'all 0.5s' }} />
        ) : (
          <FiSun style={{ color: '#7c3aed', fontSize: '1.25rem', transition: 'all 0.5s' }} />
        )}
      </div>
    </button>
  );
};
