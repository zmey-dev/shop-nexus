
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            We take pride in delivering exceptional products and service to our valued customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="p-8 rounded-lg bg-card/30 backdrop-blur border border-white/10"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "text-gold" : "text-muted-foreground"
                    }`}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="text-foreground/90 italic">"{testimonial.content}"</p>
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted mr-3 overflow-hidden">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-medium">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
