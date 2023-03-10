import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/mahim2.png'
import './HeaderSocial'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Sazzad Hosen</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA></CTA>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header