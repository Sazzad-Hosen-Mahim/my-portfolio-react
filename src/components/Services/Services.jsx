import React from 'react'
import './Services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className='service'>
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
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
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>
        </article>
        {/* END of Web Development  */}
        <article className='service'>
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service-list'>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service-list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            
            
          </ul>
        </article>
        {/* END of Content Creation  */}
      </div>
    </section>
  )
}

export default Services