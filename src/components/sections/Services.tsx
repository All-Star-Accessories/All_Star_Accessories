import React, { useState } from 'react';
import { services } from '../../lib/data';
import ServiceCard from '../ui/ServiceCard';
import { Car, Home } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'automotive' | 'home'>('all');
  
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.type === activeTab);

  return (
    <section id="services" className="py-20 bg-dark-200">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer premium audio and video solutions for both your vehicle and home, with expert installation and customization.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-dark-100 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeTab === 'all' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('all')}
              >
                All Services
              </button>
              <button
                id="automotive-services"
                className={`px-6 py-2 rounded-md transition-colors flex items-center ${
                  activeTab === 'automotive' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('automotive')}
              >
                <Car size={18} className="mr-2" />
                Automotive
              </button>
              <button
                id="home-services"
                className={`px-6 py-2 rounded-md transition-colors flex items-center ${
                  activeTab === 'home' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('home')}
              >
                <Home size={18} className="mr-2" />
                Home
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 bg-dark-100 rounded-lg p-6 md:p-8 border-l-4 border-primary">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Professional Installation Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start mb-2">
                <Car className="text-primary mr-3 h-5 w-5 mt-1" />
                <h4 className="font-semibold text-lg">Mobile Installation</h4>
              </div>
              <p className="text-gray-400 ml-8">
                Our automotive services include professional mobile installation. We come to you
                for convenient service without disrupting your schedule.
              </p>
            </div>
            <div>
              <div className="flex items-start mb-2">
                <Home className="text-primary mr-3 h-5 w-5 mt-1" />
                <h4 className="font-semibold text-lg">In-Home Installation</h4>
              </div>
              <p className="text-gray-400 ml-8">
                For home audio and video services, we provide expert in-home installation with
                clean cable management and setup tailored to your space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;