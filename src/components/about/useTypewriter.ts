'use client';
import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  loop?: boolean;
}

export const useTypewriter = ({ words, loop = true }: UseTypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));

      if (!forward && subIndex === 0) {
        setForward(true);
        setIndex((prev) => (prev + 1) % words.length);
      } else if (forward && subIndex === words[index].length) {
        setForward(false);
        if (!loop && index === words.length - 1) return;
      }
    }, Math.max(forward ? 120 : 60, parseInt(String(Math.random() * 200)) + 30));

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, words, loop]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 530);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  const currentWord = words[index] || '';
  return [`${currentWord.substring(0, subIndex)}${blink ? "|" : " "}`];
};
