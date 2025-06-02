// src/components/Loading.jsx
import React, { useEffect } from 'react';
import '../styles/loading.css';


const Loading = () => {

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []);

  return (
    <div className="loading">
      <div className="logo_loading">
      
        <a href="/"><h1>A<span>yres</span></h1></a>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
