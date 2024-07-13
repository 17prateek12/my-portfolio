import React, { forwardRef } from 'react';

const Section = forwardRef(({ id, title, children }, ref) => {
  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
});

export default Section;
