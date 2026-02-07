import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data';
import '../index.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="h-screen flex items-center justify-center text-ivory">Project not found</div>;

  const nextProjectId = project.id === projects.length ? 1 : project.id + 1;
  const nextProject = projects.find(p => p.id === nextProjectId);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-black-deep min-h-screen text-ivory selection:bg-gold-metallic selection:text-black-deep">

      {/* 1. HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          {project.videoUrl ? (
            <motion.video
              layoutId={`project-image-${project.id}`}
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={project.image}
            >
              <source src={project.videoUrl} type="video/mp4" />
            </motion.video>
          ) : (
            <motion.img
              layoutId={`project-image-${project.id}`}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black-deep" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gold-metallic text-sm tracking-[0.3em] uppercase mb-6"
          >
            {project.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-serif font-medium tracking-tight mb-8"
          >
            {project.title}
          </motion.h1>

          {project.videoUrl && (
            <button
              onClick={toggleSound}
              className="absolute bottom-12 right-12 text-xs tracking-[0.2em] uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors"
            >
              {isMuted ? 'Sound On' : 'Sound Off'}
            </button>
          )}
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 md:px-12">

        {/* 2. OVERVIEW & CREDITS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-32 border-b border-white/5">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">{project.overview}</h2>
            <div className="prose prose-lg prose-invert text-ivory/60 font-light">
              <p>{project.description}</p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs text-gold-metallic tracking-widest uppercase mb-4">Role</h3>
              <p className="text-xl font-serif">{project.role}</p>
            </div>
            <div>
              <h3 className="text-xs text-gold-metallic tracking-widest uppercase mb-4">Client</h3>
              <p className="text-xl font-serif">{project.client}</p>
            </div>
            <div>
              <h3 className="text-xs text-gold-metallic tracking-widest uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-sm text-ivory/80 pb-2 border-b border-white/10 uppercase tracking-wide">{project.serviceDetails.title}</li>
                {project.serviceDetails.deliverables.map((item, i) => (
                  <li key={i} className="text-sm text-ivory/60">&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. GALLERY */}
        <div className="py-32 space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden">
              <img
                src={project.image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                alt={`${project.title} detail 1`}
              />
            </div>
            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden md:mt-32">
              <img
                src={project.detailImage2 || project.image || "https://images.unsplash.com/photo-1542206395-9f9feb8fd868?q=80&w=2574"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                alt={`${project.title} detail 2`}
              />
            </div>
          </div>

          {/* Full Width Parallax */}
          <div className="aspect-video w-full overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2622" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" alt="Wide" />
          </div>
        </div>

        {/* 4. BEHIND THE SCENES */}
        <div className="py-32 border-t border-white/5">
          <div className="flex justify-between items-end mb-16">
            <h3 className="text-4xl font-serif">Behind The Scenes</h3>
            <span className="text-xs text-gold-metallic tracking-widest uppercase">Process</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="aspect-[9/16] bg-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs tracking-widest opacity-50 group-hover:opacity-0 transition-opacity">PLAY BTS</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. NEXT PROJECT / CTA */}
        <div className="py-48 text-center border-t border-white/5">
          <span className="text-xs text-gold-metallic tracking-widest uppercase mb-8 block">Next Project</span>
          <Link to={`/project/${nextProjectId}`} className="group inline-block">
            <h2 className="text-6xl md:text-9xl font-serif group-hover:text-gold-metallic transition-colors duration-500">
              {nextProject?.title}
            </h2>
            <div className="h-[1px] w-0 group-hover:w-full bg-gold-metallic transition-all duration-500 mt-4 mx-auto" />
          </Link>

          <div className="mt-32 p-12 glass border border-white/10 max-w-2xl mx-auto rounded-sm">
            <h4 className="text-2xl font-serif mb-4">Interested in {project.category}?</h4>
            <p className="text-ivory/60 mb-8 font-light">Let's create something iconic together.</p>
            <Link to="/contact" className="text-sm tracking-[0.2em] uppercase border-b border-gold-metallic pb-1 hover:text-gold-metallic transition-colors">Start a Project</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
