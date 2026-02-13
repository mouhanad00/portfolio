import '../index.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="portrait-container fade-in">
          <img
            src="https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/F4756ADD-8A7C-444D-85F3-D9EB3EF3F7B0.PNG"
            alt="Mohamed Akram Portrait"
            className="portrait-image"
            loading="lazy"
          />
        </div>
        <div className="bio-container fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="about-title">MOHAMED AKRAM</h1>
          <h2 className="about-subtitle">DIRECTOR OF PHOTOGRAPHY (DOP)</h2>
          <div className="bio-text">
            <p className="mb-8">
              Pressure doesn’t reduce quality—it reveals process. I’ve built my cinematography in demanding environments where discipline, focus, and consistency are non-negotiable.
            </p>
            <p>
              Doha-based (available worldwide), I work across documentary, corporate films, advertising, events, and social content—combining controlled lighting with cinematic handheld storytelling, and frequently using cinema lenses including anamorphic setups. I shoot on multiple camera systems—Sony, Canon, Nikon, and RED KOMODO—and I’m comfortable across multi-format workflows including drones and action cameras when the story calls for it. Years of delivering for sensitive entities such as the Ministry of Interior, Cyber Security, and other institutions shaped a field-tested approach: leading crews (up to 20), sustaining long production days, and delivering high-end results without compromise.
            </p>

            <div className="mt-16 pt-8 border-t border-white/5 opacity-60">
              <p className="text-lg md:text-xl font-serif italic tracking-wide">
                Let’s collaborate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="philosophy-section">
        <div className="max-w-4xl mx-auto py-12 px-8 fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="w-12 h-[1px] bg-gold-metallic/30 mx-auto mb-8" />
          <p className="about-quote">
            “Calm on set. Precision on screen—crafted with discipline, built under pressure.”
          </p>
        </div>
      </div>

      <style>{`
        .about-page {
          padding-top: 15vh;
          padding-bottom: 15vh;
          background-color: var(--color-black-deep);
          color: var(--color-ivory);
          min-height: 100vh;
        }

        .about-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          padding: 0 8vw;
          margin-bottom: 12rem;
          align-items: flex-start;
        }

        .portrait-container {
          width: 100%;
          aspect-ratio: 1/1;
          overflow: hidden;
          background-color: #0c0c0c;
        }

        .portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portrait-image:hover {
          filter: grayscale(0%);
        }

        .about-title {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 0.9;
          margin-bottom: 0.75rem;
          font-weight: 200;
          letter-spacing: -0.02em;
        }

        .about-subtitle {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          letter-spacing: 0.4em;
          color: var(--color-gold-metallic);
          margin-bottom: 4rem;
          text-transform: uppercase;
          font-weight: 600;
        }

        .bio-text {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          line-height: 1.8;
          opacity: 0.75;
          max-width: 650px;
          font-weight: 300;
          text-align: justify;
        }
        
        .mb-8 { margin-bottom: 2rem; }
        .mt-16 { margin-top: 4rem; }
        .pt-8 { padding-top: 2rem; }

        .about-quote {
            font-family: var(--font-serif);
            font-size: clamp(1.5rem, 3vw, 2.2rem);
            line-height: 1.4;
            font-style: italic;
            color: var(--color-ivory);
            opacity: 0.6;
            text-align: center;
            font-weight: 300;
            letter-spacing: 0.02em;
            margin: 0 auto;
        }

        .philosophy-section {
          padding: 12rem 8vw;
          border-top: 1px solid rgba(255,255,255,0.03);
          background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://storage.googleapis.com/mohamed-portfolio-media/extras/DSC00834.jpg.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        @media (max-width: 1024px) {
          .about-hero {
            gap: 3rem;
            margin-bottom: 8rem;
          }
        }

        @media (max-width: 900px) {
          .about-hero {
            grid-template-columns: 1fr;
            gap: 4rem;
            margin-bottom: 6rem;
          }
          .about-title {
            font-size: 3.5rem;
          }
          .portrait-container {
            max-width: 600px;
            margin: 0 auto;
          }
          .bio-text {
            text-align: left;
            font-size: 1.1rem;
          }
          .philosophy-section {
            padding: 4rem 8vw;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
