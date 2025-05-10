import React from 'react';
import { testimonials } from '../../lib/data';
import TestimonialCard from '../ui/TestimonialCard';
import { Award, Clock, Users, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Discover the expertise and dedication behind All-Star Accessories and why customers trust us with their audio and video needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Meet Morris Carmichael</h3>
            <p className="text-gray-300 mb-6">
              Morris Carmichael founded All-Star Accessories with a passion for bringing premium audio 
              experiences to vehicles across Birmingham. With years of experience in car audio installation, 
              his reputation for quality workmanship and professional service quickly made him a trusted name 
              in the industry.
            </p>
            <p className="text-gray-300 mb-6">
              As client needs evolved, Morris expanded his expertise to include home audio and video 
              solutions, bringing the same attention to detail and technical excellence to home entertainment 
              systems that made his automotive work stand out.
            </p>
            <p className="text-gray-300">
              Today, All-Star Accessories is Birmingham's go-to provider for integrated audio and video 
              solutions, serving both automotive enthusiasts and homeowners looking for premium entertainment 
              experiences.
            </p>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="bg-dark-100 rounded-lg p-8 relative z-10">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Professional audio installation"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-primary/20 rounded-lg -z-0"></div>
            <div className="absolute -top-5 -left-5 w-40 h-40 bg-primary/20 rounded-lg -z-0"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-dark-100 p-6 rounded-lg text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Quality</h4>
            <p className="text-gray-400">Premium brands and expert installation</p>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-lg text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Experience</h4>
            <p className="text-gray-400">Over 15 years in the industry</p>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-lg text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Service</h4>
            <p className="text-gray-400">Personalized attention to every client</p>
          </div>
          
          <div className="bg-dark-100 p-6 rounded-lg text-center">
            <Star className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Reputation</h4>
            <p className="text-gray-400">Trusted throughout Birmingham</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">What Our Clients Say</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;