import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> UX Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> User Flows</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Prototype Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Wireframe Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> User Surveys</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Journey Mapping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Usability Testing</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> eCommerce Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Web Design & Re-design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Contentful Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Web Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Custom Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Informational Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Web-based Enterprise Solutions</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Front-end Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Web Apps and Portals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Mobile Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> React.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Next.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Front-end Architecture & Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> JavaScript Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Custom Web Apps</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services