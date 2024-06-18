import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/About/About';
import MenuPage from './pages/Menu/Menu'; // Renamed to MenuPage
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<MenuPage />} /> // Updated to use MenuPage
        {/* other routes */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;