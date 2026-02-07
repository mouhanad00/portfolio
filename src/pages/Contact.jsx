import '../index.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-grid">
        <div className="contact-info fade-in">
          <h1 className="contact-title">WORK WITH ME</h1>
          <p className="contact-subtitle">
            AVAILABLE FOR COMMERCIAL COMMISSIONS & BRAND PARTNERSHIPS WORLDWIDE.
          </p>

          <div className="contact-details">
            <div className="detail-group">
              <span className="detail-label">EMAIL</span>
              <a href="mailto:studio@alexanderross.com" className="detail-link">studio@alexanderross.com</a>
            </div>
            <div className="detail-group">
              <span className="detail-label">REPRESENTATION</span>
              <span className="detail-text">United Talent Agency (USA)</span>
              <span className="detail-text">Iconoclast (Europe)</span>
            </div>
            <div className="detail-group">
              <span className="detail-label">SOCIAL</span>
              <div className="social-links">
                <a href="#" className="social-link">INSTAGRAM</a>
                <a href="#" className="social-link">VIMEO</a>
                <a href="#" className="social-link">LINKEDIN</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container fade-in" style={{ animationDelay: '0.2s' }}>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>NAME</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>EMAIL</label>
              <input type="email" placeholder="Your Email Address" />
            </div>
            <div className="form-group">
              <label>BUDGET</label>
              <select>
                <option>Select Budget Range</option>
                <option>$10k - $50k</option>
                <option>$50k - $100k</option>
                <option>$100k+</option>
              </select>
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea rows="4" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="submit-btn" onClick={() => alert("This is a demo contact form.")}>
              SEND INQUIRY
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-page {
          padding-top: calc(var(--spacing-section) + 80px);
          padding-bottom: var(--spacing-section);
          padding-left: 8vw;
          padding-right: 8vw;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6vw;
        }

        .contact-title {
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 1;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .contact-subtitle {
          font-family: var(--font-sans);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1.6;
          opacity: 0.7;
          margin-bottom: 4rem;
          max-width: 400px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .detail-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .detail-label {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--color-gold-metallic);
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
        }

        .detail-link, .detail-text {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: #fff;
          transition: color 0.3s ease;
        }

        .detail-link:hover {
          color: var(--color-gold-metallic);
        }

        .social-links {
          display: flex;
          gap: 2rem;
        }

        .social-link {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          position: relative;
        }

        .social-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-gold-metallic);
          transition: width 0.3s ease;
        }

        .social-link:hover::after {
          width: 100%;
        }

        /* Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group label {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          opacity: 0.5;
        }

        .form-group input, .form-group textarea, .form-group select {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 1rem 0;
          color: #fff;
          font-family: var(--font-serif);
          font-size: 1.2rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
          border-bottom-color: var(--color-gold-metallic);
        }

        .submit-btn {
          margin-top: 2rem;
          background: transparent;
          border: 1px solid var(--color-gold-metallic);
          color: var(--color-gold-metallic);
          padding: 1.5rem;
          font-family: var(--font-sans);
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .submit-btn:hover {
          background: var(--color-gold-metallic);
          color: var(--color-black-deep);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
