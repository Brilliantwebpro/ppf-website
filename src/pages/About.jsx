import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <>
      <motion.section className="section" initial={{opacity:0}} animate={{opacity:1}}>
        <div className="container">
          <h1>About PPF Pro</h1>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center'}}>
            <div>
                <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                    We are dedicated to preserving the beauty of your vehicle. With over 10 years of experience in the automotive detailing industry, we specialize in high-quality Paint Protection Film (PPF) installations.
                </p>
                <br />
                <p style={{color: 'var(--muted)'}}>
                    Founded in 2015, PPF Pro started with a simple mission: to provide the highest standard of paint protection in the region. We treat every car as if it were our own, ensuring meticulous attention to detail.
                </p>
            </div>
            <div className="card" style={{padding: 0, overflow: 'hidden'}}>
                <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80" alt="Workshop" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section section-alt" initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}}>
        <div className="container">
            <h2>Craftsmanship</h2>
            <p style={{maxWidth:'700px', color:'var(--muted)', marginBottom:'2rem'}}>
                It's not just about the film; it's about the installation. We pride ourselves on our "invisible" installs.
            </p>
            <div className="card">
                <h3>Hidden Edges</h3>
                <p>Wherever possible, we disassemble panels to tuck the film edges completely behind them. This prevents dirt buildup lines and ensures the film is virtually undetectable.</p>
            </div>
        </div>
      </motion.section>

      <section className="section">
        <div className="container">
            <h2>Why Choose Us?</h2>
            <div className="grid">
                <div className="card">
                    <h3>Certified Installers</h3>
                    <p>Our team is factory trained and certified by leading film manufacturers.</p>
                </div>
                <div className="card">
                    <h3>Climate Controlled Studio</h3>
                    <p>We work in a dust-free, temperature-controlled environment for perfect results.</p>
                </div>
                <div className="card">
                    <h3>Custom Plotting</h3>
                    <p>We use advanced software to plot patterns specific to your vehicle's make and model.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
