import React from 'react';
import './App.css';
import './globals.css'
import AppRoutes from './Routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
