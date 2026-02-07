import '../index.css';

const Clients = () => {
    const clients = [
        "VOGUE", "TESLA", "CHANEL", "VICE", "Nike", "Sony Music", "HBO", "A24"
    ];

    const testimonials = [
        {
            quote: "Alexander's ability to translate complex conceptual ideas into stunning visual narratives is unmatched. A true visionary.",
            author: "Sarah Miller",
            role: "Creative Director, Vogue"
        },
        {
            quote: "We trusted him with our flagship campaign, and the results redefined our brand's visual identity. The attention to detail is obsessive.",
            author: "James Chen",
            role: "CMO, Tesla Motors"
        },
        {
            quote: "Cinematic, raw, and undeniably powerful. He doesn't just shoot; he sculpts with light.",
            author: "Marcus V.",
            role: "Producer, A24"
        }
    ];

    return (
        <div className="clients-page">
            <header className="page-header fade-in">
                <h1 className="page-title">COLLABORATIONS</h1>
                <p className="page-subtitle">TRUSTED BY WORLD-CLASS BRANDS</p>
            </header>

            <div className="clients-grid fade-in" style={{ animationDelay: '0.2s' }}>
                {clients.map((client, index) => (
                    <div key={index} className="client-logo-placeholder">
                        {client}
                    </div>
                ))}
            </div>

            <div className="testimonials-section fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="section-label">TESTIMONIALS</h3>
                <div className="testimonials-container">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <div className="testimonial-author">
                                <span className="author-name">{item.author}</span>
                                <span className="author-role">{item.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .clients-page {
          padding-top: calc(var(--spacing-section) + 80px);
          padding-bottom: var(--spacing-section);
        }

        .page-header {
           padding: 0 8vw;
           margin-bottom: 6rem;
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .client-logo-placeholder {
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid rgba(255,255,255,0.1);
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.1em;
          transition: all 0.4s ease;
          cursor: default;
        }

        .client-logo-placeholder:hover {
          background-color: #1a1a1a;
          color: var(--color-gold-metallic);
        }

        .client-logo-placeholder:nth-child(4n) {
          border-right: none;
        }

        .testimonials-section {
          padding: var(--spacing-section) 8vw 0;
        }

        .testimonials-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4vw;
          margin-top: 4rem;
        }

        .testimonial-card {
          padding-right: 2rem;
        }

        .testimonial-quote {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          line-height: 1.5;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .author-name {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .author-role {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          opacity: 0.5;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
          }
           .client-logo-placeholder:nth-child(2n) {
            border-right: none;
          }
          .client-logo-placeholder:nth-child(4n) {
             border-right: 1px solid rgba(255,255,255,0.1); /* Reset */
             border-right: none; /* Override */
          }
          .testimonials-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Clients;
