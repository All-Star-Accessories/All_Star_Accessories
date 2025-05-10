import React, { useState } from 'react';
import { galleryItems } from '../../lib/data';
import GalleryItem from '../ui/GalleryItem';
import { Car, Home } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'automotive' | 'home'>('all');
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  return (
    <section id="gallery" className="py-20 bg-dark-200">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Browse through our gallery of completed installations and upgrades for both automotive and home systems.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-dark-100 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  filter === 'all' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-colors flex items-center ${
                  filter === 'automotive' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setFilter('automotive')}
              >
                <Car size={18} className="mr-2" />
                Automotive
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-colors flex items-center ${
                  filter === 'home' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setFilter('home')}
              >
                <Home size={18} className="mr-2" />
                Home
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;