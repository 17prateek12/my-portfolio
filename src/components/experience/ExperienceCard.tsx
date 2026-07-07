'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaBriefcase, FaUserTie } from 'react-icons/fa';
import { Experience } from '@/data/portfolioData';

interface ExperienceCardProps {
  exp: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getContractTypeClass = (type: Experience['contractType']) => {
    switch (type) {
      case 'Full-time': return 'full-time';
      case 'Contract': return 'contract';
      case 'Intern': return 'intern';
      case 'Freelance': return 'freelance';
      default: return '';
    }
  };

  return (
    <div className="experience-card-box glass-card">
      {/* Header Info */}
      <div className="experience-card-header">
        <div>
          <h3 className="role-text">
            {exp.role}
          </h3>
          <p className="company-text">
            {exp.company}
          </p>
        </div>

        {/* Location & Time Badges */}
        <div className="exp-meta-badges">
          <div className="exp-meta-badge">
            <FaMapMarkerAlt className="icon-purple" />
            {exp.location}
          </div>
          <div className="exp-meta-badge">
            {exp.duration}
          </div>
        </div>
      </div>

      {/* Contract & Client Badges */}
      <div className="exp-classification-badges">
        <span className={`classification-badge ${getContractTypeClass(exp.contractType)}`}>
          <FaBriefcase style={{ fontSize: '0.75rem' }} />
          {exp.contractType}
        </span>

        {exp.client && (
          <span className="classification-badge client">
            <FaUserTie style={{ fontSize: '0.75rem' }} />
            Client: {exp.client}
          </span>
        )}
      </div>

      {/* Expand / Collapse Section */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="exp-toggler-btn"
        >
          {isOpen ? (
            <>
              <FaChevronUp style={{ fontSize: '0.65rem' }} /> Hide Details
            </>
          ) : (
            <>
              <FaChevronDown style={{ fontSize: '0.65rem' }} /> View Details & Achievements
            </>
          )}
        </button>

        {/* Work Bullets */}
        <div className={`exp-bullets-container ${isOpen ? 'open' : ''}`}>
          <ul className="bullets-list">
            {exp.description.map((bullet, idx) => (
              <li key={idx} className="bullet-item">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack Used */}
      <div className="exp-tech-section">
        <div className="tech-badges-flow">
          {exp.techStack.map((tech, idx) => (
            <span key={idx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
