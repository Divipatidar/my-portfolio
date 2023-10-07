import React from 'react'
import CTA from './CTA'
import Social from './Social'
import './Header.css'
import me from './pik1.png'

function Header() {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Divya Patidar</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <Social/>
      <div className="me">
        <img src={me} alt="me" />
      </div>
      <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
