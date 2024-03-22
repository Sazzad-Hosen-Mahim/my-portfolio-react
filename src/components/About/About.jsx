import React from 'react'
import './About.css'
import ME from '../../assets/about-mahim-new.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 data-aos="zoom-in"
        data-aos-duration="1000">About Me</h2>

      <div className="container about-container">
        <div className="about-me">
            <div  className="about-me-img">
              <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-cart' data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <RiAwardFill className='about-icon'/>
              <h5>Experience</h5>
              <small>2+ years working!</small>
            </article>

            <article className='about-cart' data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>

            <article className='about-cart' data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>14+ Completed</small>
            </article>
          </div>

          <p>I am Sazzad Hosen. I am an entry level full stack web developer. I worked on various project worldwide. Worked through 1000+ hours of learning Javascript, ReactJS, NodeJS, and MongoDB. I am very passionate about my work and also adaptive to the new technology rapidly. I love to work in a challenging environment in a challenging position. I am a detail-oriented, self-independent, and task-driven Web Developer with the ability to identify and provide the technological needs of companies through ingenious innovation.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About