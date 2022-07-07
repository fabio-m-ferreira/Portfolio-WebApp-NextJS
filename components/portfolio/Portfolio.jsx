import React from 'react'

const data = [

  {
    id: 1,
    image: 'assets/gestix-portfolio.jpg',
    title: 'Gestix Software | Professional Project',
    sourceButton: <span className="btn disabled-button">Private Source</span>,
    demoButton: <a href="https://www.gestixsoftware.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>,
  },
  {
    id: 2,
    image: 'assets/facepalm-portfolio.jpg',
    title: 'Social Media App - Android | Academic Project',
    sourceButton: <a href="https://github.com/voydd9/Facepalm" className="btn" target="_blank" rel="noreferrer">GitHub</a>,
    demoButton: <a href="/projects/facepalm" className="btn btn-primary" target="_blank" rel="noreferrer">See More</a>
  },
  {
    id: 3,
    image: 'assets/portfolio-template.jpg',
    title: 'Portfolio Template',
    sourceButton: <a href="https://github.com/voydd9/React-Portfolio-WebApp" className="btn" target="_blank" rel="noreferrer">GitHub</a>,
    demoButton: <a href="https://ff-react-portfolio-template.vercel.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  },
  {
    id: 4,
    image: 'assets/project_js.jpg',
    title: 'Travel Agency | Academic Project',
    sourceButton: <a href="https://github.com/voydd9/travel-agency" className="btn" target="_blank" rel="noreferrer">GitHub</a>,
    demoButton: <a href="projects/travel-agency/index.html" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  },

]


const Portfolio = () => {

  var aosDelayIndex = -1

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({ id, image, title, sourceButton, demoButton }) => {

            aosDelayIndex++

            return (
              <div key={id} className="aos-wrapper" data-aos="fade-up" data-aos-delay={aosDelayIndex * 50}>
                <article className="portfolio-item">
                  <div className="portfolio-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="portfolio-item-content">
                    <h3>{title}</h3>
                    <div className="portfolio-item-cta">
                      {sourceButton}
                      {demoButton}
                    </div>
                  </div>
                </article>
              </div>
            )
          })
        }
      </div>

      <div className="details-wrapper">
        <div className="details-container">

        </div>
      </div>
    </section>
  )
}

export default Portfolio