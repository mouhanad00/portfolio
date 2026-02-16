import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PortfolioSection from '../components/PortfolioSection';

const HERO_IMAGES = [
  "https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/%D9%83%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D8%B7%D8%A9/jpeg/Still%202026-02-12%20170746_1.13.1.jpg",
  "https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/%D9%83%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D8%B7%D8%A9/jpeg/Still%202026-02-12%20170753_1.15.1.jpg",
  "https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/%D9%83%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B7%D8%A9/jpeg/Still%202026-02-12%20170817_1.22.1.jpg",
  "https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/nourah/jpeg/Still%202026-02-12%20171329_1.5.3.jpg",
  "https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/nourah/jpeg/Still%202026-02-12%20171341_1.9.2.jpg",
  "https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/nourah/jpeg/Still%202026-02-12%20171348_1.11.2.jpg",
  "https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%AA%D8%A7%D9%87%D9%8A%D9%84%20%D8%A7%D9%84%D8%B3%D8%AC%D9%8A%D9%86/jpeg/Still%202026-02-12%20165620_1.13.1.jpg",
  "https://storage.googleapis.com/mohamed-portfolio-media/stills/stills/%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9%20%D8%AA%D8%A7%D9%87%D9%8A%D9%84%20%D8%A7%D9%84%D8%B3%D8%AC%D9%8A%D9%86/jpeg/Still%202026-02-12%20165818_1.15.1.jpg"
];

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black-deep text-ivory relative min-h-screen">

      {/* Hero Section */}
      <section ref={heroRef} className="h-screen w-full relative flex flex-col justify-center items-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black-deep/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-deep/20 to-black-deep z-10" />
          {HERO_IMAGES.map((src, index) => (
            <motion.img
              key={src}
              src={src}
              initial={false}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-20 text-center space-y-8 p-4"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-serif font-thin tracking-tight text-white"
          >
            Akram<span className="text-gold-metallic">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-ivory/60 font-sans max-w-md mx-auto"
          >
            Director of photography
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-gold-metallic to-transparent" />
        </motion.div>
      </section>

      {/* Main Portfolio & Services Area */}
      <PortfolioSection limit={4} />

    </div>
  );
};

export default Home;
