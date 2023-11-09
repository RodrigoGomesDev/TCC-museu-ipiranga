import React from 'react';
import './styles/App.css';
import './styles/globals.css'
import AppRoutes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
  
function App() {
    return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
