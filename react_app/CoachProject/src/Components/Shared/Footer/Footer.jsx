import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-section icons">
      <img src="logo.png" alt="Logo" class="footer-logo" />
      <div class="social-icons">
        <a href="https://x.com/?lang=tr" target="_blank"><i class="icon">X</i></a>
        <a href="https://www.instagram.com/" target="_blank"><i class="icon">Instagram</i></a>
        <a href="https://www.youtube.com/?themeRefresh=1" target="_blank"><i class="icon">YouTube</i></a>
        <a href="https://tr.linkedin.com/" target="_blank"><i class="icon">LinkedIn</i></a>
      </div>
    </div>
  
    <div class="footer-section links">
      <h4>Use cases</h4>
      <ul>
        <li>UI design</li>
        <li>UX design</li>
        <li>Wireframing</li>
      </ul>
    </div>
  
    <div class="footer-section links">
      <h4>Explore</h4>
      <ul>
        <li>Design</li>
        <li>Prototyping</li>
        <li>Development features</li>
      </ul>
    </div>
  
    <div class="footer-section links">
      <h4>Resources</h4>
      <ul>
        <li>Blog</li>
        <li>Best practices</li>
        <li>Colors</li>
      </ul>
    </div>
  </footer>
  
  )
}

export default Footer
