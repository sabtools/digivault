"use client";

interface ProductFilterProps {
  categories: { slug: string; name: string }[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export default function ProductFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onCategoryChange(cat.slug)}
          className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
            activeCategory === cat.slug
              ? "bg-accent text-white shadow-md shadow-accent/25"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
