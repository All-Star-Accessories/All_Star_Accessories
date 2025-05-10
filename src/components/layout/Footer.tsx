import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-200 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#home" className="text-2xl font-bold text-white flex items-center mb-4">
              <span className="text-primary">All-Star</span>
              <span className="ml-1">Accessories</span>
            </a>
            <p className="text-gray-400 mb-6">
              Premium audio and video solutions for your home and vehicle in Birmingham, Alabama.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/All-Star-Accessories-100063473835943/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-100 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-dark-100 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:allstaraccessoriesbham@gmail.com"
                className="bg-dark-100 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-primary mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  <a href="tel:2054280000" className="hover:text-primary">
                    (205) 428-0000
                  </a>
                </span>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  <a 
                    href="mailto:allstaraccessoriesbham@gmail.com"
                    className="hover:text-primary break-words"
                  >
                    allstaraccessoriesbham@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  4304 49th Ave N, Birmingham, AL 35217
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} All-Star Accessories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;