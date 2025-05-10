import React from 'react';
import { GalleryItem as GalleryItemType } from '../../lib/types';

interface GalleryItemProps {
  item: GalleryItemType;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-2 py-1 bg-primary/90 text-xs font-semibold rounded mb-2">
            {item.type === 'automotive' ? 'Automotive' : 'Home'}
          </span>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-gray-300">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;