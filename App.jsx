import React, { useState } from 'react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">PPF<span>PRO</span></a>
          <button className="nav-toggle" onClick={toggleNav}>
            ☰
          </button>
          <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsNavOpen(false)}>Home</a></li>
            <li><a href="#benefits" onClick={() => setIsNavOpen(false)}>Benefits</a></li>
            <li><a href="#services" onClick={() => setIsNavOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container hero-content">
          <h1>Protect Your Investment</h1>
          <p>Invisible protection against rock chips, scratches, and road debris. Keep your car looking brand new.</p>
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="benefits" className="section">
        <div className="container">
          <h2 className="section-title">Why Choose PPF?</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Self-Healing</h3>
              <p>Advanced technology allows minor scratches to disappear with heat.</p>
            </div>
            <div className="card">
              <h3>Stain Resistance</h3>
              <p>Hydrophobic properties repel water, dirt, and road grime.</p>
            </div>
            <div className="card">
              <h3>10-Year Warranty</h3>
              <p>Guaranteed not to yellow, crack, or peel for a decade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-dark">
        <div className="container">
          <h2 className="section-title text-white">Contact Us</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} PPF Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;