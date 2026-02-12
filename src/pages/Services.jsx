import React from 'react'
import { motion } from 'framer-motion'

export default function Services(){
  return (
    <>
      <motion.section className="section" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <div className="container">
          <h1>Our Packages</h1>
          <p style={{maxWidth: '600px', marginBottom: '3rem', color: 'var(--muted)'}}>
            We use only the highest quality self-healing films to keep your car looking new. Choose the level of protection that fits your driving habits.
          </p>
          <div className="grid">
            <div className="card">
              <span className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--accent)'}}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </span>
              <h3>The Track Pack</h3>
              <p style={{color:'var(--muted)'}}>High-impact protection for the most vulnerable areas.</p>
              <ul style={{marginTop: '1rem', paddingLeft: '1.2rem', color: 'var(--muted)'}}>
                <li>Full Bumper</li>
                <li>Full Hood</li>
                <li>Full Fenders</li>
                <li>Mirrors & Rocker Panels</li>
              </ul>
            </div>
            <div className="card" style={{border: '1px solid var(--accent)'}}>
              <span className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--accent)'}}>
                  <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
                  <circle cx="6.5" cy="16.5" r="2.5"></circle><circle cx="16.5" cy="16.5" r="2.5"></circle>
                </svg>
              </span>
              <h3>The Ultimate Armor</h3>
              <p style={{color:'var(--muted)'}}>360° Seamless Coverage. Maximum resale value.</p>
              <ul style={{marginTop: '1rem', paddingLeft: '1.2rem', color: 'var(--muted)'}}>
                <li>Every Painted Surface</li>
                <li>Wrapped Edges</li>
                <li>Headlights & Taillights</li>
                <li>10 Year Warranty</li>
              </ul>
            </div>
            <div className="card">
              <span className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--accent)'}}>
                  <path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path>
                </svg>
              </span>
              <h3>The Stealth Conversion</h3>
              <p style={{color:'var(--muted)'}}>Style + Shield. Transform gloss paint to satin matte.</p>
              <ul style={{marginTop: '1rem', paddingLeft: '1.2rem', color: 'var(--muted)'}}>
                <li>All Painted Surfaces</li>
                <li>Satin/Matte Film</li>
                <li>Frozen Look</li>
                <li>Self-Healing Matte</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section section-alt" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <div className="container">
          <h2>Add-on Services</h2>
          <div className="grid" style={{marginTop: '2rem'}}>
             <div className="card">
                <h3>Ceramic Coating</h3>
                <p>Wheels & Calipers protection to repel brake dust and road grime.</p>
             </div>
             <div className="card">
                <h3>Interior Shield</h3>
                <p>Ceramic protection for leather and alcantara surfaces.</p>
             </div>
             <div className="card">
                <h3>Exoshield</h3>
                <p>Exterior windshield protection film to prevent rock chips and pitting.</p>
             </div>
          </div>
        </div>
      </motion.section>

      <section className="section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div style={{marginTop: '2rem', display: 'grid', gap: '1.5rem'}}>
            <div>
              <h4 style={{color: 'var(--accent)'}}>How long does PPF last?</h4>
              <p style={{color: 'var(--muted)'}}>Our premium films come with a 10-year warranty against cracking, peeling, and yellowing.</p>
            </div>
            <div>
              <h4 style={{color: 'var(--accent)'}}>Can I wash my car normally?</h4>
              <p style={{color: 'var(--muted)'}}>Yes, but we recommend waiting 7 days after installation. Hand washing is preferred, but touchless automatic washes are safe.</p>
            </div>
            <div>
              <h4 style={{color: 'var(--accent)'}}>Does it damage the paint?</h4>
              <p style={{color: 'var(--muted)'}}>No, PPF is designed to protect your paint. It can be removed safely by a professional without leaving residue.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 style={{fontFamily: 'Playfair Display, serif', marginBottom: '3rem'}}>Maintenance & Aftercare</h2>
          
          <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '4rem', gap: '2rem'}}>
            <div style={{textAlign: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '1rem'}}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <h4 style={{marginBottom: '0.5rem'}}>Cure Time</h4>
              <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Wait 7 days before the first wash to allow full adhesion.</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '1rem'}}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
              <h4 style={{marginBottom: '0.5rem'}}>Hand Wash</h4>
              <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Use the two-bucket method. Avoid automatic car washes.</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '1rem'}}><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
              <h4 style={{marginBottom: '0.5rem'}}>No Wax</h4>
              <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Avoid waxes containing naphtha or kerosene. Use ceramic boosters.</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '1rem'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              <h4 style={{marginBottom: '0.5rem'}}>Contaminants</h4>
              <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Remove bird droppings and tree sap immediately to prevent etching.</p>
            </div>
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem'}}>
             <div style={{flex: '1 1 300px'}}>
                <h3 style={{fontFamily: 'Playfair Display, serif', marginBottom: '0.5rem'}}>Maintenance Membership</h3>
                <p style={{color: 'var(--muted)'}}>Join our Elite Care Program. Quarterly professional inspections and ceramic-infused washes to maintain your warranty and gloss levels.</p>
             </div>
             <div>
                <a href="#" className="btn btn-ghost">Download Aftercare PDF</a>
             </div>
          </div>
        </div>
      </section>
    </>
  )
}
