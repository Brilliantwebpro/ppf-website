import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav(){
  return (
    <header className="site-header nav-wrap">
      <div className="container nav-container">
        <Link className="brand" to="/">PPF<span style={{color:'var(--accent)'}}>PRO</span></Link>
        <nav className="nav">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className="cta">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
