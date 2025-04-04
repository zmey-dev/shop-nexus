
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/lib/store";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemCount = useCartStore(state => state.getTotalItems());

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-gradient">LUXE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h2 className="text-lg font-medium">Shopping Cart</h2>
                  <CartItems />
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b border-white/10 animate-fade-in">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10">
                <Button variant="ghost" className="w-full justify-start pl-0" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function CartItems() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Add items to your cart to continue
        </p>
        <Link to="/shop">
          <Button>Shop Now</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center py-4 border-b border-border">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 rounded-md object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium">{item.name}</h3>
              <p className="text-sm text-gold">${item.price.toFixed(2)}</p>
              <div className="flex items-center mt-1">
                <button
                  className="text-sm border border-border h-6 w-6 flex items-center justify-center rounded-md"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="text-sm mx-2">{item.quantity}</span>
                <button
                  className="text-sm border border-border h-6 w-6 flex items-center justify-center rounded-md"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => removeItem(item.id)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="border-t border-border pt-4">
        <div className="flex justify-between mb-4">
          <span>Total</span>
          <span className="font-medium text-gold">${getTotalPrice().toFixed(2)}</span>
        </div>
        <Button className="w-full" asChild>
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
