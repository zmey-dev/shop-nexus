
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground">
            Stay updated with our latest products, exclusive offers, and style guides.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-background/50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
