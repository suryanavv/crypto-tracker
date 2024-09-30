import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import CoinDetails from './components/CoinDetails';
import logo from './assets/logo.png'; // Import the logo

function AppContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e0b4b] via-[#2a0e6b] to-[#1e0b4b] text-white">
      <div className="max-w-6xl mx-auto p-8 font-sans">
        <img src={logo} alt="CrypCoin Tracker Logo" className="mx-auto mb-8 w-32" />
        <Routes>
          <Route path="/" element={<CryptoList />} />
          <Route path="/:coinId" element={<CoinDetails />} />
        </Routes>
        <footer className="text-center text-sm text-gray-500 mt-6">
          © 2024 All rights reserved. |
          <a
            href="https://www.linkedin.com/in/surya-naveen-veeravalli-609976257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 ml-1"
          >
            LinkedIn
          </a>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;