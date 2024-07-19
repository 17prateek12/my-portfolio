import React from 'react';
import { HomeSection } from "@/section/HomeSection";
import Section from "@/component/Section";
import { SkillSection } from "@/section/SkillSection";
import { Experiencesection } from "@/section/Experiencesection";
import { ProjectSection } from "@/section/ProjectSection";
import Contactme from "@/section/Contactme";
import ScrollToTop from "@/component/ScrollToTop";

export default function Home() {
  return (
    <main className="max-w-full mx-auto mt-16">
      <ScrollToTop />
      <Section id="home">
        <HomeSection />
      </Section>
      <Section id="skills">
        <SkillSection />
      </Section>
      <Section id="experience">
        <Experiencesection />
      </Section>
      <Section id="project">
        <ProjectSection />
      </Section>
      <Section id="contact">
        <Contactme />
      </Section>
    </main>
  );
}