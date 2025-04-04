
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-black via-background to-background">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            <span className="text-gradient block">Luxury Redefined</span>
            <span className="block">For Those Who Appreciate Elegance</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover our curated collection of premium products that embody craftsmanship, quality, and timeless style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" asChild>
              <Link to="/shop">
                Shop Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
