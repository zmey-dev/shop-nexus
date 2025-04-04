
import { useParams, useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { useCartStore } from "@/lib/store";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/shop")}>
              Return to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductGallery images={product.images} name={product.name} />
            
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl text-gold">${product.price.toFixed(2)}</p>
              
              <div className="space-y-4">
                <h3 className="font-medium">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decreaseQuantity} 
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>

              <div className="pt-6 border-t border-white/10">
                <div className="text-sm space-y-2">
                  <p>
                    <span className="text-muted-foreground mr-2">Category:</span>
                    <span className="capitalize">{product.category}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground mr-2">Tags:</span>
                    {product.tags.map((tag, index) => (
                      <span key={tag} className="capitalize">
                        {tag}
                        {index < product.tags.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
