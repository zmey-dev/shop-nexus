
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCartStore } from "@/lib/store";

export function ProductGrid() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const addToCart = useCartStore(state => state.addItem);
  
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
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
  );
}
