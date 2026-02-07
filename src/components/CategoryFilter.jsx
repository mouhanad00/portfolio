import { motion } from 'framer-motion';

/**
 * Defensive category filter to avoid runtime crashes when data is missing.
 */
const CategoryFilter = ({ categories = [], activeCategory, onChange }) => {
  const safeCategories = Array.isArray(categories) ? categories : [];

  if (!safeCategories.length) return null;

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20">
      {safeCategories.map((category) => (
        <button
          key={category}
          onClick={() => onChange?.(category)}
          className="relative px-2 py-1 text-sm md:text-base tracking-widest uppercase text-ivory/60 hover:text-gold-metallic transition-colors duration-300"
        >
          {activeCategory === category && (
            <motion.div
              layoutId="active-pill-filter"
              className="absolute inset-0 border-b border-gold-metallic"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className={activeCategory === category ? "text-gold-metallic" : ""}>
            {category}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
