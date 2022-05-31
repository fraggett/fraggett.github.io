import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/victormanuelsandovalbaena/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/fraggett' target="_blank"><BsGithub/></a>
        <a href='https://dribbble.com/fraggett' target="_blank"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocial