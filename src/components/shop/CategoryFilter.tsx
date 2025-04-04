
import { Link, useSearchParams } from "react-router-dom";
import { getProductCategories } from "@/data/products";

export function CategoryFilter() {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");
  const categories = getProductCategories();
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Categories</h3>
      <div className="space-y-2">
        <div key="all" className="group">
          <Link
            to="/shop"
            className={`block px-3 py-2 rounded-md transition-colors ${
              !currentCategory
                ? "bg-primary/10 text-primary"
                : "hover:bg-primary/5"
            }`}
          >
            All Products
          </Link>
        </div>
        {categories.map((category) => (
          <div key={category} className="group">
            <Link
              to={`/shop?category=${category}`}
              className={`block px-3 py-2 rounded-md transition-colors ${
                currentCategory === category
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-primary/5"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
