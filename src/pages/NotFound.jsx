import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-black-deep text-ivory min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-7xl font-serif mb-4">404</h1>
      <p className="text-ivory/60 mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        to="/"
        className="text-sm tracking-[0.2em] uppercase border-b border-gold-metallic pb-1 hover:text-gold-metallic transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
