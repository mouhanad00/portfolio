import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { id, title, image, category, year } = project || {};

  return (
    <Link
      to={`/project/${id}`}
      className="group block w-full overflow-hidden border border-white/10 bg-black-deep"
    >
      <div className="relative aspect-[3/4]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-ivory/70">
            {title}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-sm tracking-[0.15em] uppercase text-ivory">
          <div>
            <p className="text-xs text-ivory/70">{category}</p>
            <h3 className="font-serif text-lg md:text-xl">{title}</h3>
          </div>
          {year && <span className="text-ivory/50">{year}</span>}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
