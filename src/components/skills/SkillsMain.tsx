'use client';
import React, { useState } from 'react';
import { Heading } from '@/components/common/Heading';
import { Skill } from '@/data/portfolioData';

// Icons mapping
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiReact, 
  SiRedux, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiDjango, SiMongodb, SiMysql, SiRedis, 
  SiApachekafka, SiDocker, SiKubernetes, SiAmazonaws, SiGooglecloud, 
  SiPostman, SiGit, SiGithub, SiSpringboot, SiFastapi 
} from "react-icons/si";
import { FaDatabase, FaJava, FaRobot, FaPuzzlePiece } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";

interface SkillsMainProps {
  skills: Skill[];
}

export const SkillsMain: React.FC<SkillsMainProps> = ({ skills }) => {
  const categories: Skill['category'][] = [
    'Languages',
    'Frontend',
    'Backend',
    'Databases & Caching',
    'DevOps & Cloud',
    'AI & Agents',
    'Tools & Other'
  ];

  const [activeCategory, setActiveCategory] = useState<Skill['category']>('Languages');

  // Map skill names to icons
  const getSkillIcon = (name: string) => {
    const lowercaseName = name.toLowerCase().trim();
    switch (lowercaseName) {
      case 'c++': return <SiCplusplus style={{ color: '#2563eb' }} />;
      case 'java': return <FaJava style={{ color: '#ef4444' }} />;
      case 'python': return <SiPython style={{ color: '#eab308' }} />;
      case 'javascript': return <SiJavascript style={{ color: '#facc15' }} />;
      case 'typescript': return <SiTypescript style={{ color: '#3b82f6' }} />;
      case 'sql': return <FaDatabase style={{ color: '#64748b' }} />;
      case 'react.js': return <SiReact style={{ color: '#38bdf8' }} />;
      case 'next.js': return <SiReact style={{ color: 'var(--text-primary)' }} />; // using react icon
      case 'redux': return <SiRedux style={{ color: '#7c3aed' }} />;
      case 'react query': return <SiReact style={{ color: '#f43f5e' }} />;
      case 'html': return <SiHtml5 style={{ color: '#f97316' }} />;
      case 'css': return <SiCss3 style={{ color: '#3b82f6' }} />;
      case 'tailwind css': return <SiTailwindcss style={{ color: '#38bdf8' }} />;
      case 'spring boot': return <SiSpringboot style={{ color: '#10b981' }} />;
      case 'node.js': return <SiNodedotjs style={{ color: '#10b981' }} />;
      case 'express.js': return <SiExpress style={{ color: 'var(--text-secondary)' }} />;
      case 'django': return <SiDjango style={{ color: '#047857' }} />;
      case 'fastapi': return <SiFastapi style={{ color: '#0d9488' }} />;
      case 'web sockets': return <SiSocketIcon />;
      case 'mongodb': return <SiMongodb style={{ color: '#10b981' }} />;
      case 'mysql': return <SiMysql style={{ color: '#2563eb' }} />;
      case 'redis': return <SiRedis style={{ color: '#dc2626' }} />;
      case 'kafka': return <SiApachekafka style={{ color: 'var(--text-primary)' }} />;
      case 'docker': return <SiDocker style={{ color: '#0ea5e9' }} />;
      case 'kubernetes': return <SiKubernetes style={{ color: '#2563eb' }} />;
      case 'aws': return <SiAmazonaws style={{ color: '#f59e0b' }} />;
      case 'gcp': return <SiGooglecloud style={{ color: '#2563eb' }} />;
      case 'llms': return <TbBrain style={{ color: '#818cf8' }} />;
      case 'claude': return <FaRobot style={{ color: '#fb923c' }} />;
      case 'gemini': return <TbBrain style={{ color: '#60a5fa' }} />;
      case 'ai': return <TbBrain style={{ color: '#d946ef' }} />;
      case 'ai agents': return <FaRobot style={{ color: '#34d399' }} />;
      case 'vs code extensions': return <FaPuzzlePiece style={{ color: '#0ea5e9' }} />;
      case 'git': return <SiGit style={{ color: '#ea580c' }} />;
      case 'github': return <SiGithub style={{ color: 'var(--text-primary)' }} />;
      case 'postman': return <SiPostman style={{ color: '#f97316' }} />;
      default: return <TbBrain style={{ color: '#8b5cf6' }} />;
    }
  };

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <div style={{ position: 'relative' }}>
      <Heading 
        heading="My Technical Stack" 
        subtitle="A collection of technologies, frameworks, and tools I use to build scalable web applications and intelligent AI solutions."
      />

      {/* Tabs Container */}
      <div className="skills-tabs">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`skill-tab-btn ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-layout">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-item-card glass-card"
          >
            <div className="skill-icon-wrap">
              {getSkillIcon(skill.name)}
            </div>
            <span className="skill-label-text">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sub-component icon placeholder
const SiSocketIcon = () => (
  <svg 
    stroke="currentColor" 
    fill="currentColor" 
    strokeWidth="0" 
    viewBox="0 0 24 24" 
    style={{ color: '#f59e0b' }} 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M16 11V3H8v8H5v10h14V11h-3zm-6 8H8v-4h2v4zm4 0h-2v-4h2v4z"></path>
  </svg>
);
