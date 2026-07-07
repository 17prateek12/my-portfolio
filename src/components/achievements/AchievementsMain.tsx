import React from 'react';
import { Heading } from '@/components/common/Heading';
import { FaAward, FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { Achievement, Publication } from '@/data/portfolioData';

interface AchievementsMainProps {
  achievements: Achievement[];
  publications: Publication[];
}

export const AchievementsMain: React.FC<AchievementsMainProps> = ({ achievements, publications }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Heading 
        heading="Publications & Achievements" 
        subtitle="Highlighted academic research contributions and technical milestones achieved throughout my career."
      />

      <div className="split-sections-grid">
        {/* Left Column: Publications */}
        <div className="column-feature">
          <div className="column-title-row">
            <div className="col-icon-wrap">
              <FaBookOpen />
            </div>
            <h3 className="column-title-text">
              Research Publications
            </h3>
          </div>

          {publications.map((pub) => (
            <div 
              key={pub.id}
              className="publication-card glass-card"
            >
              <div className="publication-title-row">
                <h4 className="publication-title">
                  {pub.title}
                </h4>
                {pub.link && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pub-anchor-link"
                    aria-label="View Publication"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <p className="publication-date">{pub.date}</p>
              <p className="publication-description">
                {pub.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Achievements */}
        <div className="column-feature">
          <div className="column-title-row">
            <div className="col-icon-wrap emerald">
              <FaAward />
            </div>
            <h3 className="column-title-text">
              Honors & Accomplishments
            </h3>
          </div>

          {achievements.map((ach) => (
            <div 
              key={ach.id}
              className="achievement-card glass-card"
            >
              <div className="ach-icon-badge">
                <FaAward />
              </div>
              <div className="ach-card-body">
                <h4 className="achievement-title">
                  {ach.title}
                </h4>
                <p className="achievement-date">{ach.date}</p>
                {ach.description && (
                  <p className="achievement-description">
                    {ach.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
