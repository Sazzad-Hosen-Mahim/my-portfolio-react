import React from 'react'
import './Services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>My Services</h2>
      <div className="container services-container">
        <article className='service'>
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Ensuring seamless experiences across various devices and screen sizes.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p> Integrating user feedback into design updates for continuous improvement.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Ensuring designs meet accessibility standards to accommodate users with disabilities.</p>
            </li>
            
            
          </ul>
        </article>
        {/* END of UI/UX  */}
        <article className='service'>
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className='service-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Building complete web applications, handling both front-end and back-end development.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Creating responsive application that adapts with all kind of devices.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Building server-side logic, databases, and RESTful APIs</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Designing efficient database structure.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Creating fully responsive landing page.</p>
            </li>
            
          </ul>
        </article>
        {/* END of Web Development  */}
        <article className='service'>
          <div className="service-head">
            <h3>Website maintenance </h3>
          </div>

          <ul className='service-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Identify bugs and issues that may arise and fixing this</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Monitoring performance optimization</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Verifying that the web application remains responsive and functional across various browser.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Optimizing and maintaining database</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Managing code changes and updates using version control systems</p>
            </li>
            
            
          </ul>
        </article>
        {/* END of Content Creation  */}
      </div>
    </section>
  )
}

export default Services