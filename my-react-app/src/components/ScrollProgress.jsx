// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react';
import '../styles/ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{
          width: `${scrollPercentage}%`,
          background: 'linear-gradient(90deg, #42a5f5 0%, #1976d2 100%)' 
        }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
