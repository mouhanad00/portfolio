import PortfolioSection from '../components/PortfolioSection';

const Portfolio = () => {
  return (
    <div className="bg-black-deep text-ivory min-h-screen">
      <header className="px-4 md:px-12 pt-28 pb-12">
        <div className="max-w-[1800px] mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-ivory/60 mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-serif">Signature Projects</h1>
          <p className="mt-6 max-w-2xl text-ivory/60">
            A curated mix of commercial film, music videos, photography, and post-production work.
          </p>
        </div>
      </header>

      <PortfolioSection />
    </div>
  );
};

export default Portfolio;
