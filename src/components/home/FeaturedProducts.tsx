
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getFeaturedProducts } from "@/data/products";
import { useCartStore } from "@/lib/store";

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  const addToCart = useCartStore(state => state.addItem);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our carefully selected premium products showcase exceptional craftsmanship and design.
            </p>
          </div>
          <Link 
            to="/shop" 
            className="inline-flex items-center text-gold hover:underline mt-4 md:mt-0"
          >
            View all products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="bg-card/50 backdrop-blur border border-white/10 overflow-hidden group">
              <Link to={`/product/${product.id}`} className="block overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="font-medium line-clamp-1 hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gold mt-1">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.images[0],
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
