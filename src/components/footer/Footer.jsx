import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href='/' className='footer__logo'>Jack</a>
      <ul className='permalinks'>
        <li><a href='/'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='portfolio'>Portfolio</a></li>
        <li><a href='#certificate'>Certificate</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://facebook'><FiFacebook /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><FiTwitter /></a>

      </div>
    </footer>
  )
}

export default Footer