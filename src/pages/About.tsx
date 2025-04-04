
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="relative bg-gradient-to-b from-black via-background to-background py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed bg-center opacity-20"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-muted-foreground">Crafting luxury experiences since 2010</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010, LUXE began with a simple yet ambitious vision: to create a curated 
                collection of luxury products that embody craftsmanship, quality, and timeless elegance.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that luxury is not just about the price tag, but about the experience, 
                the craftsmanship, and the story behind each product. Our team travels the world 
                to discover unique items created by artisans who share our passion for excellence.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxury watch craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxury retail experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At LUXE, we are committed to sustainability and ethical sourcing. We carefully select 
                partners who share our values and ensure that every product in our collection meets 
                our rigorous standards for quality and environmental responsibility.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in transparency and building lasting relationships with our customers. 
                Our dedicated team is always available to provide personalized assistance and 
                ensure that every purchase is a memorable experience.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Behind LUXE is a team of passionate individuals who are experts in their fields 
              and share a common love for exceptional craftsmanship and design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: "Alexander Wright",
                position: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sophia Chen",
                position: "Creative Director",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "James Rodriguez",
                position: "Head of Curation",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-card/50 backdrop-blur border border-white/10 rounded-lg overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
