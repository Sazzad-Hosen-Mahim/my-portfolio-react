import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a href="#" className='footer-logo'>Sazzad Hosen</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://facebook.com/sazzad.mahimm"><FaFacebookSquare/></a>
          <a href="https://instagram.com"><BsInstagram/></a>
          <a href="https://twitter.com"><BsTwitter/></a>
        </div>


        <div className="footer-copyright">
          <small>&copy; Sazzad Mahim. All right reserved 2023.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer