import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Airbnb Clone</h1>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
  </nav>
);

export default Navbar;
