import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import CategoryFilter from './CategoryFilter';
import { projects, categories } from '../data';

const PortfolioSection = ({ limit = null }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    let result = projects;
    if (activeCategory !== "All") {
      result = projects.filter(p => p.category === activeCategory);
    }
    return limit ? result.slice(0, limit) : result;
  }, [activeCategory, limit]);

  return (
    <section className="py-24 md:py-32 px-4 md:px-12 bg-transparent relative z-20">
      <div className="max-w-[1800px] mx-auto">

        {/* Header / Filter */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <h2 className="text-4xl md:text-6xl font-serif text-ivory">
            {limit ? "Selected Works" : "Portfolio"}
          </h2>
          <div className="w-full md:w-auto overflow-x-auto pb-4 md:pb-0">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
