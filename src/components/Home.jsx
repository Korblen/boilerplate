import React from 'react';
import { useAtom } from 'jotai';
import { authAtom } from '../store/authAtom';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext'; // Import the useTheme hook
import '../styles/Home.scss';

const Home = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); // Use the theme context

  const handleLogout = () => {
    setAuth(null);
    navigate('/login');
  };

  return (
    <div className={`home-container ${theme}`}>
      <h1>Welcome to the Home Page</h1>
      {auth ? (
        <>
          <p>Logged in as {auth.email}</p>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/payment">Go to Payment</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Home;
