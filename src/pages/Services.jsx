import '../index.css';

const Services = () => {
  const services = [
    {
      title: "CINEMATIC VIDEOGRAPHY",
      description: "Full-scale production for commercials, brand films, and music videos. We utilize cinema-grade equipment and techniques to deliver visuals that feel larger than life.",
      features: ["Concept Development", "Production", "Cinema Cameras", "Lighting Design"]
    },
    {
      title: "HIGH-END PHOTOGRAPHY",
      description: "Editorial, fashion, and product photography that captures the essence of your brand. Each image is meticulously composed and retouched to perfection.",
      features: ["Editorial", "Campaign", "Retouching", "Art Direction"]
    },
    {
      title: "CREATIVE & ART DIRECTION",
      description: "Comprehensive visual strategy for brands looking to redefine their identity. We build cohesive visual worlds that resonate with high-value audiences.",
      features: ["Brand Identity", "Visual Strategy", "Style Guides", "Moodboarding"]
    },
    {
      title: "POST-PRODUCTION",
      description: "The magic happens in the edit. We offer industry-leading editing, color grading, and sound design to polish your project to a cinematic sheen.",
      features: ["Editing", "Color Grading", "Sound Design", "VFX"]
    }
  ];

  return (
    <div className="services-page">
      <header className="services-header fade-in">
        <h1 className="page-title">EXPERTISE</h1>
        <p className="page-subtitle">COMPREHENSIVE VISUAL SOLUTIONS FOR ELITE BRANDS</p>
      </header>

      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
            <div className="service-number">0{index + 1}</div>
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.description}</p>
              <ul className="service-features">
                {service.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="service-action">
              <span className="plus-icon">+</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .services-page {
          padding: calc(var(--spacing-section) + 80px) 0 var(--spacing-section);
        }

        .services-header {
          padding: 0 8vw 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 4rem;
        }

        .page-title {
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-family: var(--font-sans);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.6;
          max-width: 600px;
        }

        .service-item {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          padding: 4rem 8vw;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: background-color 0.4s ease;
        }

        .service-item:hover {
          background-color: #1a1a1a;
        }

        .service-number {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--color-gold-metallic);
          letter-spacing: 0.1em;
        }

        .service-title {
          font-family: var(--font-serif);
          font-size: 3rem;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .service-desc {
          font-family: var(--font-sans);
          font-size: 1rem;
          line-height: 1.8;
          opacity: 0.7;
          max-width: 700px;
          margin-bottom: 2rem;
        }

        .service-features {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .service-features li {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.5;
          position: relative;
        }
        
        .service-features li:not(:last-child)::after {
          content: "•";
          position: absolute;
          right: -1.2rem;
          color: var(--color-gold-metallic);
        }

        .service-action {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .plus-icon {
          font-size: 2rem;
          color: var(--color-gold-metallic);
          transition: transform 0.4s ease;
        }

        .service-item:hover .plus-icon {
          transform: rotate(90deg);
        }

        @media (max-width: 900px) {
          .service-item {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .service-action {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
