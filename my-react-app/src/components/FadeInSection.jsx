// src/components/FadeInSection.jsx
import React, { useRef, useState, useEffect } from 'react';
import '../styles/FadeInSection.css'; 

export default function FadeInSection({ children, className = '', ...props }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section${isVisible ? ' is-visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
