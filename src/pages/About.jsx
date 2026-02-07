import '../index.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="portrait-container fade-in">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
            alt="Alexander Ross Portrait"
            className="portrait-image"
          />
        </div>
        <div className="bio-container fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="about-title">ALEXANDER ROSS</h1>
          <h2 className="about-subtitle">VISUAL DIRECTOR</h2>
          <p className="bio-text">
            Based in Los Angeles and Paris. My work operates at the intersection of cinema and commercial art, seeking to find the raw, emotional core of every subject.
            <br /><br />
            With a background in narrative film and high-fashion photography, I approach every project with a director's eye—focusing on story, atmosphere, and the subtle nuances that elevate a brand from a product to a legacy.
          </p>
        </div>
      </div>

      <div className="philosophy-section">
        <h3 className="section-header fade-in">PHILOSOPHY</h3>
        <p className="philosophy-text fade-in">
          "True luxury is not about excess. It is about precision, intentionality, and the courage to embrace silence. In a world of noise, I create work that demands a moment of pause."
        </p>
      </div>

      <div className="experience-section">
        <div className="experience-column fade-in">
          <h3 className="section-header">EXPERIENCE</h3>
          <ul className="list-items">
            <li><span>2020 — Present</span> Freelance Director</li>
            <li><span>2018 — 2020</span> Senior DP, Vogue</li>
            <li><span>2015 — 2018</span> Editor, Vice Media</li>
          </ul>
        </div>
        <div className="experience-column fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="section-header">RECOGNITION</h3>
          <ul className="list-items">
            <li>Cannes Lions — Gold (2024)</li>
            <li>Vimeo Staff Pick (2023)</li>
            <li>Aesthetica Short Film Festival (2022)</li>
          </ul>
        </div>
      </div>

      <style>{`
        .about-page {
          padding-top: 15vh;
          padding-bottom: 10vh;
        }

        .about-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 0 8vw;
          margin-bottom: var(--spacing-section);
          align-items: center;
        }

        .portrait-container {
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        .portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.8s ease;
        }

        .portrait-image:hover {
          filter: grayscale(0%);
        }

        .about-title {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .about-subtitle {
          font-family: var(--font-sans);
          font-size: 1rem;
          letter-spacing: 0.3em;
          color: var(--color-gold-metallic);
          margin-bottom: 3rem;
          text-transform: uppercase;
        }

        .bio-text {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          line-height: 1.6;
          opacity: 0.8;
          max-width: 600px;
        }

        .philosophy-section {
          background-color: #1a1a1a;
          padding: var(--spacing-section) 8vw;
          text-align: center;
        }

        .philosophy-text {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.3;
          font-style: italic;
          max-width: 1200px;
          margin: 4rem auto 0;
        }

        .experience-section {
          padding: var(--spacing-section) 8vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .section-header {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          color: var(--color-gold-metallic);
          margin-bottom: 3rem;
          text-transform: uppercase;
        }

        .list-items {
          list-style: none;
        }

        .list-items li {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
        }

        .list-items li span:first-child {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          opacity: 0.5;
          letter-spacing: 0.1em;
          align-self: center;
        }

        @media (max-width: 768px) {
          .about-hero, .experience-section {
            grid-template-columns: 1fr;
          }
          .about-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
