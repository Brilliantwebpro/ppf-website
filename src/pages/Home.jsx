import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="compare-container" ref={containerRef} onMouseMove={handleMove} onTouchMove={(e) => handleMove(e.touches[0])}>
      <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600" alt="After" className="compare-img" style={{filter: 'grayscale(100%) contrast(1.2)'}} />
      <span className="compare-label label-after">Stealth Matte</span>
      
      <div className="compare-overlay" style={{ width: `${sliderPosition}%` }}>
        <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600" alt="Before" className="compare-img" style={{ width: '100vw', maxWidth: '1100px' }} /> {/* Hack to keep image static relative to container */}
        <span className="compare-label label-before">Factory Gloss</span>
      </div>
    </div>
  );
}

export default function Home(){
  return (
    <>
      <section className="hero hero-large" style={{backgroundImage: "url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop')"}}>
        <div className="hero-overlay"></div>
        <div className="container hero-inner">
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}}>Protect Your Investment</motion.h1>
          <motion.p initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.15}}>Invisible armor for your vehicle. Premium Paint Protection Film (PPF) installation.</motion.p>
          <motion.div className="hero-cta" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}}>
            <Link className="btn" to="/contact">Get A Free Quote</Link>
          </motion.div>
        </div>
      </section>

      <motion.section className="section" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <div className="container">
          <h2 className="section-title">Precision Workflow</h2>
          <div className="grid">
            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Decontamination</h3>
              <p>Chemical & Mechanical prep to ensure a clinically clean surface.</p>
            </div>
            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Correction</h3>
              <p>Removing paint defects and swirl marks for a mirror finish.</p>
            </div>
            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Installation</h3>
              <p>Clean-room application with wrapped edges for invisibility.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section section-alt" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <div className="container">
          <h2 className="section-title">The Studio Environment</h2>
          <div className="grid">
             <div className="card">
                <h3>6000K Lighting</h3>
                <p style={{color:'var(--muted)'}}>Surgical grade lighting reveals every imperfection before we start.</p>
             </div>
             <div className="card">
                <h3>Climate Control</h3>
                <p style={{color:'var(--muted)'}}>Temperature and humidity regulated for optimal film adhesion.</p>
             </div>
             <div className="card">
                <h3>Deionized Water</h3>
                <p style={{color:'var(--muted)'}}>Filtration systems ensure zero mineral deposits under the film.</p>
             </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section" initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
        <div className="container">
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', alignItems:'center'}}>
                <div>
                    <h2 style={{marginBottom:'1rem'}}>Digital Precision</h2>
                    <h3 style={{color:'var(--accent)', marginBottom:'1.5rem'}}>No-Blade Policy</h3>
                    <p style={{color:'var(--muted)', lineHeight:'1.7'}}>
                        We utilize advanced plotting software to pre-cut patterns specific to your vehicle's make and model. 
                        This ensures that <strong>no knives ever touch your paint</strong>. We modify patterns to wrap edges where possible, 
                        giving you the safety of a kit with the coverage of a custom install.
                    </p>
                </div>
                <div className="card" style={{padding: 0, overflow: 'hidden', minHeight:'300px'}}>
                    <img src="https://images.unsplash.com/photo-1669625334154-24a0bba7d217?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D q=80&w=800&auto=format&fit=crop" alt="Precision Plotting" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
                </div>
            </div>
        </div>
      </motion.section>

      <section className="section section-alt">
        <div className="container">
            <h2 className="section-title">The Stealth Slider</h2>
            <BeforeAfterSlider />
        </div>
      </section>

      <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Ready to protect your vehicle?</h2>
          <p style={{marginBottom: '2rem', color: 'var(--muted)'}}>Get a free quote today and drive with confidence.</p>
          <Link to="/contact" className="btn">Get a Quote</Link>
        </div>
      </section>
    </>
  )
}
