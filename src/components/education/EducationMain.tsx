import React from 'react';
import { Heading } from '@/components/common/Heading';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Education } from '@/data/portfolioData';

interface EducationMainProps {
  education: Education[];
}

export const EducationMain: React.FC<EducationMainProps> = ({ education }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Heading 
        heading="Education" 
        subtitle="My academic background, major degrees, and focused fields of study."
      />

      <div className="edu-timeline-container">
        {education.map((edu) => (
          <div 
            key={edu.id}
            className="edu-card-box glass-card"
          >
            <div className="edu-row">
              {/* Institution and Degree info */}
              <div className="edu-left">
                <div className="edu-icon-container">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="inst-title">
                    {edu.institution}
                  </h3>
                  <p className="degree-text">
                    {edu.degree}
                  </p>
                </div>
              </div>

              {/* Time & Location Badges */}
              <div className="edu-badges">
                <div className="edu-badge">
                  <FaMapMarkerAlt className="icon-purple" />
                  {edu.location}
                </div>
                <div className="edu-badge">
                  <FaCalendarAlt className="icon-purple" />
                  {edu.duration}
                </div>
              </div>
            </div>

            {edu.description && (
              <p className="edu-description">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
