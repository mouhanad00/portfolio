import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import VideoPlayer from '../components/VideoPlayer';
import '../index.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [activeVideoUrl, setActiveVideoUrl] = useState(project?.video);
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      setActiveVideoUrl(project.video);
      setIsGalleryOpen(true);
    }
  }, [id, project]);

  const toggleSound = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      const newState = !videoRef.current.muted;
      videoRef.current.muted = newState;
      setIsMuted(newState);
    }
  };

  const handleFullscreen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  if (!project) return <div className="h-screen flex items-center justify-center text-ivory">Project not found</div>;

  const nextProjectId = project.id === projects.length ? 1 : project.id + 1;
  const nextProject = projects.find(p => p.id === nextProjectId);

  return (
    <div className="bg-black-deep min-h-screen text-ivory selection:bg-gold-metallic selection:text-black-deep">

      {/* 1. HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          {activeVideoUrl && !hasVideoError ? (
            <VideoPlayer
              ref={videoRef}
              src={activeVideoUrl}
              className="w-full h-full object-cover object-top"
              onError={() => setHasVideoError(true)}
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-black-deep text-gold-metallic/50 text-xs tracking-[0.3em] uppercase">
              Media pending...
            </div>
          )}
          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black-deep z-0" />
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
            className="text-6xl md:text-9xl font-serif font-medium tracking-tight mb-8 text-white"
          >
            {project.title}
          </motion.h1>

          {/* Teaser Variations Selector */}
          {project.teaserVariations && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 mt-8 flex-wrap justify-center"
            >
              {project.teaserVariations.map((teaser, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideoUrl(teaser.video)}
                  className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all ${activeVideoUrl === teaser.video
                    ? 'border-gold-metallic text-gold-metallic bg-gold-metallic/10'
                    : 'border-white/20 text-white/60 hover:border-white/40'
                    }`}
                >
                  {teaser.title}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Media Controls */}
        <div className="absolute bottom-12 right-12 z-20 flex items-center gap-6">
          {/* Fullscreen Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            onClick={handleFullscreen}
            className="group flex items-center gap-3 text-white/40 hover:text-gold-metallic transition-all duration-300 outline-none"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              Fullscreen
            </span>
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-gold-metallic/50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
              </svg>
            </div>
          </motion.button>

          {/* Sound Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={toggleSound}
            className="group flex items-center gap-3 text-white/40 hover:text-gold-metallic transition-all duration-300 outline-none"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              {isMuted ? 'Unmute' : 'Mute'}
            </span>
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-gold-metallic/50 transition-colors">
              {isMuted ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
            </div>
          </motion.button>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 md:px-12">

        {/* 2. OPERATOR SELECTS GALLERY (COLLAPSIBLE) */}
        {project.bts && project.bts.stills && project.bts.stills.length > 0 && (
          <div className="py-32 border-b border-white/5">
            <button
              onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              className="w-full flex justify-between items-end group outline-none"
            >
              <h3 className="text-4xl font-serif group-hover:text-gold-metallic transition-colors tracking-tight text-white">Operator Selects (B-roll shot by me)</h3>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-gold-metallic tracking-[0.3em] uppercase mb-2">Process</span>
                <span className="text-2xl font-light text-ivory/40">
                  {isGalleryOpen ? '−' : '+'}
                </span>
              </div>
            </button>
            <AnimatePresence>
              {isGalleryOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
                    {project.bts.stills.map((imgUrl, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <img
                          src={imgUrl}
                          alt={`Shot from operator selects ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top aspect-video"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* 3. OVERVIEW & CREDITS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-32 border-b border-white/5">
          <div className="lg:col-span-8">
            <h3 className="text-3xl md:text-5xl font-serif mb-12 leading-tight whitespace-pre-line text-ivory">
              {project.brief}
            </h3>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs text-gold-metallic tracking-widest uppercase mb-4">Category</h3>
              <p className="text-ivory/80">{project.category}</p>
            </div>
            <div>
              <h3 className="text-xs text-gold-metallic tracking-widest uppercase mb-4">Role</h3>
              <p className="text-ivory/80">Cinematographer & Team Lead</p>
            </div>
          </div>
        </div>

        {/* 4. NEXT PROJECT / CTA */}
        <div className="py-48 text-center border-t border-white/5">
          <span className="text-xs text-gold-metallic tracking-widest uppercase mb-8 block">Next Project</span>
          <Link to={`/project/${nextProjectId}`} className="group inline-block">
            <h2 className="text-6xl md:text-9xl font-serif group-hover:text-gold-metallic transition-colors duration-500 text-white">
              {nextProject?.title}
            </h2>
            <div className="h-[1px] w-0 group-hover:w-full bg-gold-metallic transition-all duration-500 mt-4 mx-auto" />
          </Link>

          <div className="mt-32 p-12 glass border border-white/10 max-w-2xl mx-auto rounded-sm">
            <h4 className="text-2xl font-serif mb-4 text-white">Interested in {project.category}?</h4>
            <p className="text-ivory/60 mb-8 font-light">Let's create something iconic together.</p>
            <Link to="/contact" className="text-sm tracking-[0.2em] uppercase border-b border-gold-metallic pb-1 hover:text-gold-metallic transition-colors">Start a Project</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
