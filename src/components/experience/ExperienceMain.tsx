import React from 'react';
import { Heading } from '@/components/common/Heading';
import { ExperienceCard } from './ExperienceCard';
import { Experience } from '@/data/portfolioData';

interface ExperienceMainProps {
  experience: Experience[];
}

export const ExperienceMain: React.FC<ExperienceMainProps> = ({ experience }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Heading 
        heading="Work Experience" 
        subtitle="Detailed log of my professional history, including full-time roles, contracts, and internship positions."
      />

      <div className="timeline-wrapper">
        {/* Central Vertical Timeline Line */}
        <div className="timeline-vertical-line"></div>

        <div className="timeline-container">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              
              {/* Timeline Dot Indicator */}
              <div className="timeline-indicator-dot"></div>

              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
