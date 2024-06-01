import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext'; // Import the useTheme hook
import '../styles/navbar.scss';

const Navbar = () => {
  const links = ['/', '/login', '/signup', '/payment'];
  const { theme, toggleTheme } = useTheme(); // Use the theme context
  const currentThemeClass = theme === 'light' ? 'light-theme-navbar' : 'dark-theme-navbar';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className={currentThemeClass}
    >
      <div className="nav-content">
        <Link to="/" className="nav-logo">MyApp</Link>
        <div className="nav-links">
          {links.map((path) => (
            <motion.div
              key={path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to={path}>
                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </motion.div>
          ))}
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
