import React, { useState, useEffect } from 'react';

const TypingText: React.FC = () => {
  const words = ['robustas', 'escalables', 'modernas', 'innovadoras', 'funcionales'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pausa por 2 segundos
    } else if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, 50);
      }
    } else {
      if (currentText === currentWord) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words]);

  return (
    <p className="hero-description">
      Especializado en crear experiencias digitales innovadoras que transforman ideas en soluciones web{' '}
      <span className="dynamic-word">
        {currentText}
        <span className="typing-cursor">|</span>
      </span>
     
    </p>
  );
};

export default TypingText;