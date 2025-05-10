import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row bg-dark-300 overflow-hidden"
    >
      {/* Background split images */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="flex-1 relative bg-cover bg-center opacity-50"
             style={{ backgroundImage: "url('https://images.pexels.com/photos/3807079/pexels-photo-3807079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-300 via-dark-300/90 to-transparent" />
        </div>
        <div className="flex-1 relative bg-cover bg-center opacity-50"
             style={{ backgroundImage: "url('https://images.pexels.com/photos/3329153/pexels-photo-3329153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
          <div className="absolute inset-0 bg-gradient-to-l from-dark-300 via-dark-300/90 to-transparent" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="container relative z-10 flex flex-col justify-center items-center pt-24 pb-12 px-4 text-center">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Premium Audio & Video Solutions for Your{' '}
            <span className="text-primary">Home</span> and{' '}
            <span className="text-primary">Vehicle</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience exceptional sound and visuals with professional installation
            services for your car and home entertainment systems.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              className="text-lg px-8 py-4"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Services
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-4"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get a Quote
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-1">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;