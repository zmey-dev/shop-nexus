
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground mb-8">
            Complete your purchase by providing the information below.
          </p>
          
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
