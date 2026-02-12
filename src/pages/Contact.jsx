import React, {useState} from 'react'

export default function Contact(){
  const [msg,setMsg] = useState('')
  function handleSubmit(e){
    e.preventDefault();
    setMsg('Sending...')
    setTimeout(()=>{ setMsg('Thanks — I will respond within 48 hours.'); e.target.reset() },800)
  }

  return (
    <section className="container section">
      <h1>Contact Us</h1>
      <p style={{marginBottom: '3rem', color: 'var(--muted)'}}>Ready to start? Tell us about your project and budget.</p>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem'}}>
        
        <form onSubmit={handleSubmit} className="contact-form" style={{width: '100%'}}>
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Vehicle Year/Make/Model<input name="vehicle" placeholder="e.g. 2024 Porsche 911 GT3" required /></label>
            
            <label>Current Condition
                <select name="condition" defaultValue="" required>
                    <option value="" disabled>Select Condition</option>
                    <option value="new">New Delivery</option>
                    <option value="lightly_used">Lightly Used</option>
                    <option value="needs_correction">Needs Correction</option>
                </select>
            </label>

            <label>Service of Interest
                <select name="service" defaultValue="" required>
                    <option value="" disabled>Select Package</option>
                    <option value="track_pack">The Track Pack</option>
                    <option value="ultimate_armor">The Ultimate Armor</option>
                    <option value="stealth">The Stealth Conversion</option>
                    <option value="ceramic">Ceramic Coating Only</option>
                    <option value="other">Other / Custom</option>
                </select>
            </label>

            <label>Message<textarea name="message" rows="5" required></textarea></label>
            <button className="btn" type="submit">Send Message</button>
            <p className="form-msg" aria-live="polite">{msg}</p>
        </form>

        <div>
            <div className="card" style={{marginBottom: '2rem'}}>
                <h3>Visit Our Studio</h3>
                <p style={{color: 'var(--muted)', marginTop: '0.5rem'}}>
                    123 Auto Detail Blvd<br/>
                    Los Angeles, CA 90210
                </p>
                <br/>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> info@ppfpro.com</p>
            </div>

            <div className="card">
                <h3>Business Hours</h3>
                <ul style={{listStyle: 'none', padding: 0, marginTop: '0.5rem', color: 'var(--muted)'}}>
                    <li style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}><span>Mon - Fri</span> <span>8:00 AM - 6:00 PM</span></li>
                    <li style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}><span>Saturday</span> <span>9:00 AM - 4:00 PM</span></li>
                    <li style={{display: 'flex', justifyContent: 'space-between'}}><span>Sunday</span> <span>Closed</span></li>
                </ul>
            </div>
        </div>

      </div>
    </section>
  )
}
