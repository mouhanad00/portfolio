import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

const ProjectCard = ({ project }) => {
  const { id, title, video, category, brief } = project || {};
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBrief = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Link
      to={`/project/${id}`}
      className="group block w-full overflow-hidden border border-white/10 bg-black-deep transition-all duration-500 hover:border-white/20"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        {video ? (
          <VideoPlayer
            src={video}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-black-deep text-gold-metallic/50 text-[10px] tracking-widest uppercase px-4 text-center">
            Video uploading...
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />

        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end min-h-[40%]">
          <h3 className="text-xl font-serif font-medium group-hover:text-gold-metallic transition-colors mb-2">
            {title}
          </h3>
          <span className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">
            {category}
          </span>
          {isExpanded && (
            <p className="text-sm font-light text-white/70 transition-all duration-500 ease-in-out line-clamp-3">
              {brief}
            </p>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-medium group-hover:text-gold-metallic transition-colors mb-2">
          {title}
        </h3>
        <span className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">
          {category}
        </span>
        <p className="text-sm font-light text-white/70 transition-all duration-500 ease-in-out line-clamp-3">
          {brief}
        </p>
        <button
          onClick={toggleBrief}
          className="mt-4 text-xs tracking-[0.2em] uppercase border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors"
        >
          {isExpanded ? 'Less' : 'More'}
        </button>
      </div>
    </Link>
  );
};

export default ProjectCard;
