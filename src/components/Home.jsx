import React from 'react';
import { useAtom } from 'jotai';
import { authAtom } from '../store/authAtom';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
  const [auth, setAuth] = useAtom(authAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(null);
    navigate('/login');
  };

  return (
    <div className="home-container">
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
