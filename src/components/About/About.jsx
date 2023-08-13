import React from 'react'
import './About.css'
import ME from '../../assets//mahim5.png'
import {RiAwardFill} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
            <div className="about-me-img">
              <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-cart'>
              <RiAwardFill className='about-icon'/>
              <h5>Experience</h5>
              <small>1.5+ years working!</small>
            </article>

            <article className='about-cart'>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about-cart'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>23+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic debitis odit quibusdam molestiae unde doloremque culpa enim fugit quam necessitatibus laboriosam dolorem soluta dolores eum omnis consectetur, ea reiciendis.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About