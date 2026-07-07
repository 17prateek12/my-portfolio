import React from 'react';

interface HeadingProps {
  heading: string;
  subtitle?: string;
  isMainSection?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ heading, subtitle, isMainSection = true }) => {
  return (
    <div className="heading-container">
      {isMainSection ? (
        <h2 className="heading-main">
          {heading}
        </h2>
      ) : (
        <h3 className="heading-sub">
          {heading}
        </h3>
      )}
      
      {/* Decorative Premium Underline */}
      <div className="heading-underline">
        <div className="line-fade"></div>
        <div className="dot-glow"></div>
        <div className="line-solid"></div>
        <div className="dot-emerald"></div>
        <div className="line-solid-right"></div>
      </div>

      {subtitle && (
        <p className="heading-subtitle-text">
          {subtitle}
        </p>
      )}
    </div>
  );
};
