import React from 'react';
import { useTheme } from './ThemeContext'; // Import the useTheme hook
import '../styles/Footer.scss';

const Footer = () => {
  const { theme } = useTheme(); // Use the theme context to get the current theme

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
