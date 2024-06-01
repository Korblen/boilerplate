import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './components/ThemeContext';
import { lightTheme, darkTheme } from './components/Themes';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Payment from './components/Payment';
import CheckoutForm from './components/CheckoutForm';
import Carousel from './components/Carousel';

const App = () => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.fontColor }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
