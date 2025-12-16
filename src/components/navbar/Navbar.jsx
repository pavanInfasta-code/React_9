import React, { useState } from 'react';
import logo from '../../assets/Nav/logo.png';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // toggle state

  return (
    <div className="container">
      <nav className='nav-bar'>
        <div className="nav-left">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger toggler for mobile */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Menu */}
        <div className={`nav-right ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>Resources</li>
            <li>Success stories</li>
            <li>Company</li>
            <li>Pricing</li>
          </ul>

          <div className="buttons">
            <button className='login' onClick={() => navigate("/login")}>Login</button>
            <button className='signup' onClick={() => navigate("/signup")}>Create free account</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
