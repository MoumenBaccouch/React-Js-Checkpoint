import React from 'react'
import './App.css';
const Navbar = () => {
  return (
    <div>
        <nav>
    <div class="navbar">
      <div class="logo"><a href="#">Mr Baccouch.com</a></div>
      <ul class="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <div class="cancel-btn">
            <i class="fas fa-times"></i>
          </div>
      </ul>
      <div class="media-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-discord"></i></a>
        <a href="#"><i class="fab fa-google"></i></a>
      </div>
    </div>
    <div class="menu-btn">
      <i class="fas fa-bars"></i>
    </div>
  </nav>
    </div>
  )
}

export default Navbar