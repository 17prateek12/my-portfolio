'use client';
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";
import { DarkModeToggle } from './DarkModeToggle';

interface NavItem {
  label: string;
  secid: string;
}

export const NavBar: React.FC = () => {
  const [mobiledropdown, setMobiledropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems: NavItem[] = [
    { label: "Home", secid: "home" },
    { label: "Skills", secid: "skills" },
    { label: "Experience", secid: "experience" },
    { label: "Projects", secid: "project" },
    { label: "Education", secid: "education" },
    { label: "Achievements", secid: "achievements" },
    { label: "Contact", secid: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent, secid: string) => {
    e.preventDefault();
    const section = document.getElementById(secid);
    if (section) {
      const offset = -70; // Header height offset
      const elementPosition = section.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMobiledropdown(false);
    }
  };

  return (
    <>
      <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo/Name */}
          <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')} className="logo-area">
            <span className="logo-title">PRATEEK SHARMA</span>
            <span className="logo-subtitle">PORTFOLIO</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="nav-menu">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.secid}`}
                onClick={(e) => handleScrollToSection(e, item.secid)}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons (DarkMode & Hamburger) */}
          <div className="nav-actions">
            <DarkModeToggle />
            <button
              onClick={() => setMobiledropdown(true)}
              className="mobile-nav-toggle"
              aria-label="Open Menu"
            >
              <GiHamburgerMenu style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay (Rendered outside <header> to avoid backdrop-filter opacity leaks) */}
      <div 
        className={`mobile-drawer-overlay ${mobiledropdown ? 'active' : ''}`} 
        onClick={() => setMobiledropdown(false)}
      ></div>

      {/* Mobile Drawer Menu Content (Rendered outside <header> to avoid backdrop-filter opacity leaks) */}
      <div className={`mobile-drawer ${mobiledropdown ? 'active' : ''}`}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
            Navigation
          </span>
          <button
            onClick={() => setMobiledropdown(false)}
            className="drawer-close-btn"
            aria-label="Close Menu"
          >
            <CgCloseO style={{ fontSize: '1.25rem' }} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="drawer-links">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.secid}`}
              onClick={(e) => handleScrollToSection(e, item.secid)}
              className="drawer-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
