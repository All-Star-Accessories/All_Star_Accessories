import React from 'react';
import { TestimonialItem } from '../../lib/types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-dark-100 p-6 rounded-lg h-full flex flex-col">
      <Quote className="text-primary h-8 w-8 mb-4 opacity-50" />
      <p className="text-gray-300 mb-6 flex-grow">{testimonial.content}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;