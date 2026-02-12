import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header nav-wrap">
      <div className="container nav-container">
        <Link className="brand" to="/">PPF<span style={{color:'var(--accent)'}}>PRO</span></Link>
        
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="cta" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
