// src/App.jsx
import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Loading from "./components/Loading.jsx";

import nprogress from 'nprogress';
import './styles/nprogress.css';


const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    nprogress.start(); 
    const timer = setTimeout(() => {
      nprogress.done(); 
    }, 500); 

    return () => {
      clearTimeout(timer); 
      nprogress.remove(); 
    };
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

function App() {
  const [loading, setLoading] = useState(true); 


  useEffect(() => {



    const timer = setTimeout(() => {
      setLoading(false); 
    }, 800); 


    return () => {

      clearTimeout(timer); 
    };
  }, []);

  return (
    <Router>
      {loading ? <Loading /> : <AppRoutes />}
    </Router>
  );
}

export default App;
