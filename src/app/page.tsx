'use client';

import React, { useEffect, useState } from 'react';
import { PortfolioData } from '@/data/portfolioData';
import { AboutMe } from '@/components/about/AboutMe';
import { SkillsMain } from '@/components/skills/SkillsMain';
import { ExperienceMain } from '@/components/experience/ExperienceMain';
import { ProjectsMain } from '@/components/projects/ProjectsMain';
import { EducationMain } from '@/components/education/EducationMain';
import { AchievementsMain } from '@/components/achievements/AchievementsMain';
import { ContactMain } from '@/components/contact/ContactMain';
import { ScrollToTop } from '@/components/common/ScrollToTop';

export default function Home() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/portfolio');
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: 'screen',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg-primary)'
      }}>
        <div className="spinner" style={{ 
          width: '3.5rem', 
          height: '3.5rem', 
          borderWidth: '4px',
          borderColor: 'rgba(124, 58, 237, 0.2)',
          borderTopColor: 'var(--primary-accent)'
        }}></div>
        <p style={{
          marginTop: '1.5rem',
          color: 'var(--primary-accent)',
          fontWeight: 700,
          letterSpacing: '0.1em'
        }}>LOADING PORTFOLIO...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{
          padding: '2rem',
          borderRadius: '1.25rem',
          backgroundColor: 'rgba(239, 68, 68, 0.05)',
          border: '1px solid rgba(239, 68, 68, 0.15)',
          maxWidth: '28rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#EF4444', marginBottom: '0.5rem' }}>
            Error Loading Portfolio
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{error || 'Could not retrieve data.'}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
            style={{ backgroundColor: '#EF4444', boxShadow: 'none' }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="main-wrapper">
      <ScrollToTop />
      
      {/* Background Orbs for Glassmorphism */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      {/* Sections */}
      <section id="home" className="section-container" style={{ paddingTop: '7.5rem', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <AboutMe personalInfo={data.personalInfo} />
      </section>

      <section id="skills" className="section-container" style={{ borderTop: '1px solid var(--border-color)' }}>
        <SkillsMain skills={data.skills} />
      </section>

      <section id="experience" className="section-container" style={{ borderTop: '1px solid var(--border-color)' }}>
        <ExperienceMain experience={data.experience} />
      </section>

      <section id="project" className="section-container" style={{ borderTop: '1px solid var(--border-color)' }}>
        <ProjectsMain projects={data.projects} />
      </section>

      <section id="education" className="section-container" style={{ borderTop: '1px solid var(--border-color)' }}>
        <EducationMain education={data.education} />
      </section>

      <section id="achievements" className="section-container" style={{ borderTop: '1px solid var(--border-color)' }}>
        <AchievementsMain achievements={data.achievements} publications={data.publications} />
      </section>

      <section id="contact" className="section-container" style={{ borderTop: '1px solid var(--border-color)' }}>
        <ContactMain personalInfo={data.personalInfo} />
      </section>
    </main>
  );
}
