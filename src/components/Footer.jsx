import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
            <div className="footer-col">
                <Link className="brand" to="/" style={{fontSize:'1.5rem', display:'block', marginBottom:'1rem'}}>PPF<span style={{color:'var(--accent)'}}>PRO</span></Link>
                <p style={{color:'var(--muted)', lineHeight:'1.6'}}>The Gold Standard in Automotive Preservation. Surgical precision for the world's finest vehicles.</p>
            </div>
            
            <div className="footer-col">
                <h4>Navigation</h4>
                <ul className="footer-links">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>The Studio</h4>
                <p style={{color:'var(--muted)', marginBottom:'1rem'}}>123 Auto Detail Blvd<br/>Los Angeles, CA 90210</p>
                <p style={{color:'var(--white)', marginBottom:'1rem'}}>(555) 123-4567</p>
                <Link to="/contact" className="btn" style={{fontSize:'0.8rem'}}>Request Private Consult</Link>
            </div>

            <div className="footer-col">
                <h4>Trust</h4>
                <div style={{display:'flex', gap:'1rem', opacity:0.5, fontSize:'1.2rem', fontWeight:'bold', color:'white'}}>XPEL CARFAX SUNTEK</div>
            </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} PPF PRO | Registered Carfax Installer</div>
      </div>
    </footer>
  )
}
