import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets//money-trek.png'
import IMG2 from '../../assets/photography.png'
import IMG3 from '../../assets/car.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Money Trek',
    client: 'https://github.com/Sazzad-Hosen-Mahim/money-trek-client',
    server: "https://github.com/Sazzad-Hosen-Mahim/final-money-trek",
    demo: 'https://money-trek.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Luxury Photography',
    client: 'https://github.com/Sazzad-Hosen-Mahim/photography-client',
    server: "https://github.com/Sazzad-Hosen-Mahim/photography-client",
    demo: 'https://luxury-photography.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Car Doctor',
    client: 'https://github.com/Sazzad-Hosen-Mahim/car-services-client',
    server: "https://github.com/Sazzad-Hosen-Mahim/car-services-client",
    demo: 'https://genius-car-65b21.web.app/',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({id, image, title, client, server, demo}) => {
            return (
              <article key={id} className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
            <div className="portfolio-item-cta">
            <a href={client} className='btn' target='_blank'>Client</a>
            <a href={server} className='btn' target='_blank'>Server</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }
        
      
      </div>
    </section>
  )
}

export default Portfolio