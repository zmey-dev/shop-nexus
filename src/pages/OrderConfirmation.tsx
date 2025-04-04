
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCartStore } from "@/lib/store";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  
  // Generate a random order number for demo purposes
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  // Clear the cart after successful purchase and redirect if no items
  useEffect(() => {
    if (items.length === 0) {
      navigate("/");
    } else {
      // Clear cart since the order is complete
      clearCart();
    }
  }, [items.length, navigate, clearCart]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="max-w-3xl w-full">
          <div className="bg-black/30 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Success message and details */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Order!</h1>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  Your order <span className="text-gold font-medium">#{orderNumber}</span> has been confirmed and will be shipped shortly.
                  You will receive an email confirmation with tracking details.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg">
                    <a href="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Track Order
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Order confirmation image - updated to a real image URL */}
              <div className="hidden md:block w-64 h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury watch" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Estimated delivery information */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <h2 className="text-xl font-medium mb-4">Estimated Delivery</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-primary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                    </div>
                    <div>
                      <p className="font-medium">Processing</p>
                      <p className="text-sm text-muted-foreground">1-2 Business Days</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-primary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </div>
                    <div>
                      <p className="font-medium">Shipping</p>
                      <p className="text-sm text-muted-foreground">3-5 Business Days</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-primary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <div>
                      <p className="font-medium">Delivery</p>
                      <p className="text-sm text-muted-foreground">Expected by <span className="text-gold">June 10</span></p>
                    </div>
                  </div>
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

export default OrderConfirmation;
