import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/About/About';
import MenuPage from './pages/Menu/Menu'; 
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<MenuPage />} /> 
      </Routes>
      <Footer />
    </>
  );
};

export default App;
