import React from 'react'
import './Experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
              <h3>Frontend Development</h3>
              <div className="experience-content">
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>Material UI</h4>
                  <small className='text-light'>Basic</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>Tailwind CSS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
              </div>
        </div>
      {/* FRontend section end  */}
        <div className="experience-backend">
        <h3>Backend Development</h3>
              <div className="experience-content">
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>MondoDB</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>Mongoose</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>Version Control</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>RESTful APIs</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>Web Sockets</h4>
                  <small className='text-light'>Basic</small>
                  </div>
                </article>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Experience