import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <header className='header'>
      <a href="/" className='logo'>KocCo</a>
      <div className="search-container">
        <span className="material-symbols-outlined search-icon">search</span>
        <input type="text" className='topnav' placeholder="Search Something" />
      </div>

      <nav className='navbar'>
        <a href="/">Educators</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/Login">Sign In</a>
      </nav>
    </header>
  );
};

export default Navbar;
