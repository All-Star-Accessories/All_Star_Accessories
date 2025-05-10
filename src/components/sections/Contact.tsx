import React, { useState } from 'react';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'automotive',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    alert('Thanks for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'automotive',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Ready to upgrade your audio and video experience? Get in touch for consultations, quotes, or to schedule an installation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-primary mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-400">
                    <a href="tel:2054280000" className="hover:text-primary">
                      (205) 428-0000
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-primary mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-400">
                    <a 
                      href="mailto:allstaraccessoriesbham@gmail.com"
                      className="hover:text-primary"
                    >
                      allstaraccessoriesbham@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-primary mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400">
                    4304 49th Ave N, Birmingham, AL 35217
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-primary mr-4 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                  <p className="text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.942420184088!2d-86.77745302392837!3d33.5246835732496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888902da749e5209%3A0x11d3629e4f5a22a7!2s4304%2049th%20Ave%20N%2C%20Birmingham%2C%20AL%2035217!5e0!3m2!1sen!2sus!4v1723111258721!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="All-Star Accessories Location"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-100 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-100 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-100 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="serviceType" className="block text-gray-300 mb-2">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-dark-100 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                >
                  <option value="automotive">Automotive Services</option>
                  <option value="home">Home Services</option>
                  <option value="both">Both</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-dark-100 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary"
                  placeholder="Tell us about your project or inquire about our services"
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;