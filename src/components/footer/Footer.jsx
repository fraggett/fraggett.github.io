import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Victor Sandoval</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://web.facebook.com/vimasaba/'><FaFacebookF/></a>
        <a href='https://www.instagram.com/itsmevictors/'><FiInstagram/></a>
        <a href='https://www.linkedin.com/in/victormanuelsandovalbaena/'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Victor Sandoval. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer