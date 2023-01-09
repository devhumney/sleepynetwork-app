import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react';
import Header from './Header';
import { ParticleBackground } from './components/particleBackground';

function App() {
  return (
    <Router>
    <div className="App">
<Header/>


    </div>
    </Router>
  );
}

export default App;
