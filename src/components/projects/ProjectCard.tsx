'use client';
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaCodeBranch } from 'react-icons/fa';
import { Project } from '@/data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card-box glass-card">
      {/* Top Section */}
      <div>
        <div className="project-card-header">
          <h3 className="project-title">
            {project.title}
          </h3>

          {/* Code/Live Links */}
          <div className="project-actions-row">
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-anchor"
              aria-label="GitHub Repository Link"
            >
              <FaGithub />
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-anchor"
                aria-label="Live Demo Link"
              >
                <FaExternalLinkAlt style={{ fontSize: '0.875rem' }} />
              </a>
            )}
          </div>
        </div>

        {/* Badges */}
        <div className="project-badges-row">
          {project.isOpenSource && (
            <span className="project-badge open-source">
              <FaCodeBranch style={{ fontSize: '0.75rem' }} /> Open Source
            </span>
          )}
          {project.contribution && (
            <span className="project-badge contributor">
              Contributor
            </span>
          )}
        </div>

        {/* Dynamic Expandable Description */}
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="project-desc-toggler"
          >
            {isOpen ? (
              <>
                <FaChevronUp style={{ fontSize: '0.5625rem' }} /> Hide Description
              </>
            ) : (
              <>
                <FaChevronDown style={{ fontSize: '0.5625rem' }} /> View Description
              </>
            )}
          </button>

          <div className={`project-description-container ${isOpen ? 'open' : ''}`}>
            <ul className="project-bullets">
              {project.description.map((bullet, idx) => (
                <li key={idx} className="project-bullet">
                  {bullet}
                </li>
              ))}
            </ul>

            {project.contribution && (
              <div className="project-contrib-box">
                <p className="contrib-label">My Contribution</p>
                <p className="contrib-text">{project.contribution}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="exp-tech-section" style={{ marginTop: '1.25rem' }}>
        <div className="tech-badges-flow">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
