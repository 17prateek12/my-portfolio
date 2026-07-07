import React from 'react';
import { Heading } from '@/components/common/Heading';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/data/portfolioData';

interface ProjectsMainProps {
  projects: Project[];
}

export const ProjectsMain: React.FC<ProjectsMainProps> = ({ projects }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Heading 
        heading="Featured Projects" 
        subtitle="A snapshot of applications I have built and open-source contributions I have made, ranging from complex full-stack web platforms to machine learning models."
      />

      <div className="projects-grid-layout">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
