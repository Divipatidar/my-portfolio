import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'

function Social() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/divya-patidar-480578202" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/divipatidar28178" target="_blank"><SiGeeksforgeeks/></a>
    </div>
  )
}

export default Social
