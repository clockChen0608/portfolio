import React, { useState } from 'react'
import './nav.css'
import { FaHome, FaBusinessTime, FaUserNinja, FaCog, FaEnvelope } from 'react-icons/fa'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserNinja /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBusinessTime /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaCog /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaEnvelope /></a>
    </nav>
  )
}

export default Nav