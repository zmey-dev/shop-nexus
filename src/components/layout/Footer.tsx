
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4 text-gradient">LUXE</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Luxury lifestyle products for the discerning customer. Quality, craftsmanship, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-foreground/70 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-foreground/70 hover:text-gold transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=watches" className="text-foreground/70 hover:text-gold transition-colors">
                  Watches
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-foreground/70 hover:text-gold transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/shop?category=electronics" className="text-foreground/70 hover:text-gold transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/shop?category=home" className="text-foreground/70 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-gold transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
