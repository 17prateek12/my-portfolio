import React from 'react';

const Section = ({ id, children }) => {
  return (
    <section id={id}>
      {children}
    </section>
  );
};

Section.displayName = 'Section';
export default Section;