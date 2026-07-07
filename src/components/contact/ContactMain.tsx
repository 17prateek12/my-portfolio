import React from 'react';
import { Heading } from '@/components/common/Heading';
import { EmailForm } from './EmailForm';
import { WhatsAppButton } from './WhatsAppButton';
import { PersonalInfo } from '@/data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

interface ContactMainProps {
  personalInfo: PersonalInfo;
}

export const ContactMain: React.FC<ContactMainProps> = ({ personalInfo }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Heading 
        heading="Contact Me" 
        subtitle="Feel free to reach out for collaborations, project discussions, or general inquiries. I will get back to you as soon as possible."
      />

      <div className="contact-layout-grid">
        {/* Left Column: Socials, Phone, WhatsApp */}
        <div className="contact-info-column">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 className="role-text" style={{ fontSize: '1.5rem' }}>
              Connect With Me
            </h3>
            <p className="hero-bio" style={{ margin: 0 }}>
              If you want to discuss a software project, hire me for full-time/contract work, or simply say hello, send a message. I am always open to discussing new ideas, technologies, and projects.
            </p>
          </div>

          {/* Direct Details Card */}
          <div className="contact-meta-card glass-card">
            <div className="meta-detail-row">
              <FaEnvelope className="icon-purple" style={{ fontSize: '1.125rem' }} />
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="meta-detail-anchor"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="meta-detail-row">
              <FaPhone className="icon-purple" style={{ fontSize: '1.125rem' }} />
              <a 
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} 
                className="meta-detail-anchor"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Social Icons Row */}
          <div className="avatar-socials" style={{ margin: 0, justifyContent: 'flex-start' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn github"
              aria-label="GitHub Profile"
            >
              <FaGithub style={{ fontSize: '1.25rem' }} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn linkedin"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin style={{ fontSize: '1.25rem' }} />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn twitter"
              aria-label="Twitter Profile"
            >
              <FaTwitter style={{ fontSize: '1.25rem' }} />
            </a>
          </div>

          {/* Direct WhatsApp Call to Action */}
          <div style={{ width: '100%', marginTop: '1rem' }}>
            <WhatsAppButton phoneNumber={personalInfo.whatsapp} />
          </div>
        </div>

        {/* Right Column: Email Form */}
        <div className="contact-form-column">
          <EmailForm />
        </div>
      </div>
    </div>
  );
};
