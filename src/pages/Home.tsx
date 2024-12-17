import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Classic Haircut",
    price: "$30",
    description: "Traditional cut with modern styling",
    duration: "45 min",
  },
  {
    title: "Beard Trim",
    price: "$25",
    description: "Shape and style your beard",
    duration: "30 min",
  },
  {
    title: "Hot Towel Shave",
    price: "$35",
    description: "Traditional straight razor shave",
    duration: "45 min",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center" 
               style={{
                 backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3')",
                 backgroundSize: "cover",
                 backgroundPosition: "center"
               }}>
        <div className="text-center space-y-6 p-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            The Gentleman's Cut
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the finest in traditional barbering with modern expertise
          </p>
          <Button 
            onClick={() => navigate("/book")}
            className="bg-barber-gold hover:bg-barber-gold/90 text-black"
          >
            Book Appointment
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-barber-brown">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-barber-gold">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="glass p-6">
                <h3 className="text-2xl font-bold mb-2 text-barber-gold">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white text-xl">{service.price}</span>
                  <span className="text-gray-400">{service.duration}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-barber-gold">
              About Us
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Since 2010, The Gentleman's Cut has been providing exceptional grooming services
              to discerning gentlemen. Our experienced barbers combine traditional techniques
              with modern styles to give you the perfect cut.
            </p>
            <Button 
              onClick={() => navigate("/book")}
              variant="outline" 
              className="border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-black"
            >
              Book Your Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
