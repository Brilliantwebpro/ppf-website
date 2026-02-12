import React from 'react'
import { motion } from 'framer-motion'

export default function Portfolio(){
  return (
    <>
      <motion.section className="section" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
        <div className="container">
          <h1>Recent Work</h1>
          <p style={{color:'var(--muted)', marginBottom: '2rem'}}>Check out some of the vehicles we've protected recently.</p>
          <div className="grid">
            <div className="card portfolio-item">
              <img src="https://images.unsplash.com/photo-1503376763036-066120622c74?w=800&q=80" alt="Porsche" className="portfolio-img" style={{marginBottom:0}}/>
              <div className="portfolio-overlay">
                <div className="portfolio-text">
                    <h3>Porsche 911 GT3</h3>
                    <p style={{color:'var(--accent)'}}>Film Used: XPEL Ultimate Plus</p>
                </div>
              </div>
            </div>
            <div className="card portfolio-item">
              <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80" alt="Tesla" className="portfolio-img" style={{marginBottom:0}}/>
              <div className="portfolio-overlay">
                <div className="portfolio-text">
                    <h3>Tesla Model S</h3>
                    <p style={{color:'var(--accent)'}}>Film Used: Suntek Reaction</p>
                </div>
              </div>
            </div>
            <div className="card portfolio-item">
              <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80" alt="Mercedes" className="portfolio-img"/>
              <h3>Mercedes AMG</h3>
              <p style={{color:'var(--muted)'}}>Track Package & Ceramic</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80" alt="Corvette" className="portfolio-img"/>
              <h3>Corvette C8</h3>
              <p style={{color:'var(--muted)'}}>Full Front & Rockers</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" alt="Audi" className="portfolio-img"/>
              <h3>Audi R8</h3>
              <p style={{color:'var(--muted)'}}>Full Body Gloss PPF</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80" alt="BMW" className="portfolio-img"/>
              <h3>BMW M3</h3>
              <p style={{color:'var(--muted)'}}>Matte Conversion</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      <section className="section section-alt">
        <div className="container">
            <h2>Featured Project: Ferrari 488 Pista</h2>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem', alignItems: 'center'}}>
                <img src="https://images.unsplash.com/photo-1583121274602-3e2820c698d9?w=800&q=80" alt="Ferrari" style={{width: '100%', borderRadius: '12px'}} />
                <div>
                    <h3>Full Body Stealth Conversion</h3>
                    <p style={{color: 'var(--muted)', marginBottom: '1rem'}}>
                        This client wanted to protect their investment while giving the car a unique look. We applied a satin-finish PPF to the entire vehicle, transforming the factory gloss red into a stunning frozen red.
                    </p>
                    <ul style={{color: 'var(--muted)', paddingLeft: '1.2rem'}}>
                        <li>Full disassembly for seamless edges</li>
                        <li>Ceramic coating on top of film</li>
                        <li>Windshield protection film</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
