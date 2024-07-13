'use client';
import { useState, useEffect } from 'react';

const useTypewriter = ({ words, loop }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));

      if (!forward && subIndex === 0) {
        setForward(true);
        setIndex((prev) => (prev + 1) % words.length);
      } else if (forward && subIndex === words[index].length) {
        setForward(false);
        if (!loop && index === words.length - 1) return;
      }
    }, Math.max(forward ? 150 : 50, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, words, loop]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return [`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`];
};

export { useTypewriter };
