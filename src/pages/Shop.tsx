
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CategoryFilter } from "@/components/shop/CategoryFilter";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-2">
            {category 
              ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
              : "All Products"
            }
          </h1>
          <p className="text-muted-foreground mb-8">
            Browse our curated collection of luxury items.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <CategoryFilter />
            </div>
            <div className="lg:col-span-3">
              <ProductGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
