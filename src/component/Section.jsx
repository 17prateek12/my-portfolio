import React, { forwardRef } from 'react';

const Section = forwardRef(({ id,children }, ref) => {
  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
});
Section.displayName = 'Section';
export default Section;
