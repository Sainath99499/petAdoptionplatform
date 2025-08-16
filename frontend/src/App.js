// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/Register';
import AdoptForm from './pages/AdoptForm';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adopt" element={<AdoptForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



