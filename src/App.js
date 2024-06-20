// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Footer component
import { VideoProvider } from './context/VideoContext'; // Ensure VideoProvider is imported
import './App.css'; // Main stylesheet

const App = () => {
  return (
    <VideoProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video/:id" element={<VideoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </VideoProvider>
  );
};

export default App;
