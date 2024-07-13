'use client';
import React, { useRef } from 'react';
import { HomeSection } from "@/section/HomeSection";
import Section from "@/component/Section";
import { SkillSection } from "@/section/SkillSection";
import { Experiencesection } from "@/section/Experiencesection";
import { ProjectSection } from "@/section/ProjectSection";
import Contactme from "@/section/Contactme";
import ScrollToTop from "@/component/ScrollToTop";
import {NavBar} from '../component/NavBar';

export default function Home() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="max-w-full mx-auto mt-16">
      <ScrollToTop />
      <NavBar
        sections={{
          home: homeRef,
          skills: skillsRef,
          experience: experienceRef,
          project: projectRef,
          contact: contactRef
        }}
      />
      <Section id="home" title="" ref={homeRef}>
        <HomeSection />
      </Section>
      <Section id="skills" title="" ref={skillsRef}>
        <SkillSection />
      </Section>
      <Section id="experience" title="" ref={experienceRef}>
        <Experiencesection />
      </Section>
      <Section id="project" title="" ref={projectRef}>
        <ProjectSection />
      </Section>
      <Section id="contact" title="" ref={contactRef}>
        <Contactme />
      </Section>
    </main>
  );
}
