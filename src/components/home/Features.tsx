
import { Award, Clock, Truck } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-gold" />,
      title: "Premium Quality",
      description:
        "All our products meet the highest standards of quality and craftsmanship.",
    },
    {
      icon: <Truck className="h-6 w-6 text-gold" />,
      title: "Free Worldwide Shipping",
      description:
        "Enjoy complimentary shipping on all orders over $250 worldwide.",
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is always available to assist you.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card/30 backdrop-blur border border-white/10 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 rounded-full bg-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
