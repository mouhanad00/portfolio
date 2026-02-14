import '../index.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container fade-in">
        <h1 className="contact-title">CONTACT</h1>

        <div className="contact-details">
          <div className="detail-group">
            <span className="detail-label">EMAIL</span>
            <a href="mailto:mk.visionqa@gmail.com" className="detail-link">
              mk.visionqa@gmail.com
            </a>
          </div>

          <div className="detail-group">
            <span className="detail-label">PHONE</span>
            <a href="tel:+97466251786" className="detail-link">
              +97466251786
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
          /* Critical fix for fixed header overlap */
          padding-top: 160px;

          padding-bottom: var(--spacing-section);
          padding-left: 8vw;
          padding-right: 8vw;

          display: flex;
          justify-content: center;
        }

        .contact-container {
          max-width: 620px;
          width: 100%;
        }

        .contact-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          margin-bottom: 4rem;
          font-weight: 700;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2.8rem;
        }

        .detail-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .detail-label {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          letter-spacing: 0.22em;
          color: var(--color-gold-metallic);
        }

        .detail-link {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .detail-link:hover {
          color: var(--color-gold-metallic);
        }

        @media (max-width: 900px) {
          .contact-page {
            padding-top: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
