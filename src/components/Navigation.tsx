import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif text-barber-gold">
            The Gentleman's Cut
          </Link>
          <div className="space-x-8">
            <Link to="/" className="text-white hover:text-barber-gold transition-colors">
              Home
            </Link>
            <Link to="/book" className="text-white hover:text-barber-gold transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
