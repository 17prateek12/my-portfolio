'use client';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { PersonalInfo } from '@/data/portfolioData';
import { useTypewriter } from '@/components/about/useTypewriter';
import wheel from "@/asset/illustration-cogwheel.png";
import hero from "@/asset/prateek.png";

interface AboutMeProps {
  personalInfo: PersonalInfo;
}

export const AboutMe: React.FC<AboutMeProps> = ({ personalInfo }) => {
  const [text] = useTypewriter({
    words: personalInfo.titles,
    loop: true,
  });

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = -70;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero-grid" style={{ position: 'relative' }}>
      
      {/* Decorative Floating Geometry Elements */}
      <div className="floating-shape shape-1">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5L55 50H5L30 5Z" stroke="var(--primary-accent)" strokeWidth="1.5" strokeOpacity="0.4"/>
        </svg>
      </div>
      <div className="floating-shape shape-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="30" height="30" rx="4" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.3" transform="rotate(45 20 20)"/>
        </svg>
      </div>
      <div className="floating-shape shape-3">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" stroke="var(--primary-accent)" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3"/>
        </svg>
      </div>

      {/* Picture & Socials (Desktop: Right Column) */}
      <div className="hero-avatar-area">
        {/* Animated Background Gears */}
        <div className="hero-gear-wrapper">
          <Image 
            src={wheel} 
            alt="gear illustration" 
            className="hero-gear"
            priority
          />
        </div>

        {/* Profile Avatar Card */}
        <div className="avatar-border">
          <div className="avatar-gradient">
            <div className="avatar-bg-circle">
              <Image 
                src={hero} 
                alt={personalInfo.name} 
                className="avatar-img"
                priority
              />
            </div>
          </div>
        </div>

        {/* Quick Social Badges */}
        <div className="avatar-socials">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-btn github"
            aria-label="GitHub Link"
          >
            <FaGithub style={{ fontSize: '1.25rem' }} />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-btn linkedin"
            aria-label="LinkedIn Link"
          >
            <FaLinkedin style={{ fontSize: '1.25rem' }} />
          </a>
          <a 
            href={personalInfo.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon-btn twitter"
            aria-label="Twitter Link"
          >
            <FaTwitter style={{ fontSize: '1.25rem' }} />
          </a>
        </div>
      </div>

      {/* Text Area (Desktop: Left Column) */}
      <div className="hero-text-area">
        <span className="welcome-badge">
          Welcome to my portfolio
        </span>
        
        <h1 className="hero-title">
          Hello, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Dynamic Typewriter */}
        <div className="hero-typewriter-container">
          <span className="typewriter-label">
            A Passionate
          </span>
          <span className="typewriter-text">
            {text}
          </span>
        </div>

        {/* Premium Bio Box */}
        <p className="hero-bio">
          {personalInfo.bio}
        </p>

        {/* CTA Actions */}
        <div className="hero-ctas">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="btn-primary"
          >
            Get In Touch
          </a>
          <a
            href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Prateek,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaWhatsapp style={{ fontSize: '1.25rem', color: '#10b981' }} />
            WhatsApp Me
          </a>
        </div>
      </div>
    </div>
  );
};
