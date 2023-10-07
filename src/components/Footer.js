import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillGithub, AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import {SiGeeksforgeeks} from 'react-icons/si'
import './Footer.css'

function Footer() {
  return (
  <footer>
    
    <ul className='links'>
       <li><a href='#'>Home</a></li>
       <li><a href='#about'>About</a></li>
       <li><a href='#skill'>Skill</a></li>
       <li><a href='#project'>Project</a></li>
       <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer_social'>
      <a href='https://wa.me/+917869840683'><BsWhatsapp/></a>
      <a href='https://instagram.com/divyapatidar442?igshid=NzZlODBkYWE4Ng=='><AiOutlineInstagram/></a>
      <a href='https://www.linkedin.com/in/divya-patidar-480578202'><AiFillLinkedin/></a>
      <a href='https://github.com/Divipatidar'><AiFillGithub/></a>
      <a href='https://x.com/Divya7971774932?t=nD4CreFCRlH-PrgEazfR_g&s=08'><AiFillTwitterCircle/></a>
      <a href='https://auth.geeksforgeeks.org/user/divipatidar28178'><SiGeeksforgeeks/></a>
    </div>
    
  </footer>
  )
}

export default Footer
