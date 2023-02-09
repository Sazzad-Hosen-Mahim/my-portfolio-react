import React from 'react'
import './Nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'
import {GoProject} from 'react-icons/go'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoProject/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail/></a>
    </nav>
  )
}

export default Nav