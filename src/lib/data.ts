import { ServiceItem, TestimonialItem, GalleryItem } from './types';

export const services: ServiceItem[] = [
  {
    id: 'car-audio',
    title: 'Car Audio Installation',
    description: 'High-quality stereo systems, speakers, and amplifiers to transform your driving experience with premium sound.',
    icon: 'radio',
    type: 'automotive',
  },
  {
    id: 'window-tinting',
    title: 'Window Tinting',
    description: 'Professional UV-protective tinting for vehicles, enhancing privacy and reducing heat while maintaining visibility.',
    icon: 'car',
    type: 'automotive',
  },
  {
    id: 'custom-lighting',
    title: 'Custom Lighting',
    description: 'HID/LED upgrades for enhanced aesthetics and visibility, customized to match your style and preferences.',
    icon: 'lightbulb',
    type: 'automotive',
  },
  {
    id: 'security-systems',
    title: 'Security Systems',
    description: 'State-of-the-art alarms, backup cameras, and dash cams to protect your vehicle and provide peace of mind.',
    icon: 'shield',
    type: 'automotive',
  },
  {
    id: 'home-theater',
    title: 'Home Theater Setup',
    description: 'Immersive audio-visual experiences with premium TVs, soundbars, receivers, and surround-sound speakers.',
    icon: 'tv',
    type: 'home',
  },
  {
    id: 'whole-home-audio',
    title: 'Whole-Home Audio',
    description: 'Multi-room audio systems for seamless music playback throughout your home, controlled from any device.',
    icon: 'music',
    type: 'home',
  },
  {
    id: 'smart-home',
    title: 'Smart Home Integration',
    description: 'Effortlessly control your audio and video systems through smart devices for the ultimate convenience.',
    icon: 'smartphone',
    type: 'home',
  },
  {
    id: 'tv-mounting',
    title: 'TV Mounting & Setup',
    description: 'Professional wall-mounting services with clean cable management for a sleek, organized entertainment area.',
    icon: 'monitor',
    type: 'home',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Michael Johnson',
    role: 'Car Enthusiast',
    content: 'Morris and his team installed an incredible sound system in my Dodge Charger. The attention to detail and sound quality exceeded my expectations!',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    name: 'Sarah Williams',
    role: 'Homeowner',
    content: 'All-Star Accessories transformed our living room with a complete home theater setup. The sound is incredible, and they kept everything neat and organized.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    name: 'David Thompson',
    role: 'Business Owner',
    content: 'I\'ve had window tinting and security systems installed by All-Star Accessories in multiple vehicles. Their work is consistently excellent and professional.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Premium Car Audio System',
    description: 'Custom audio installation with amplifiers and subwoofers',
    image: 'https://images.pexels.com/photos/3807079/pexels-photo-3807079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'automotive',
  },
  {
    id: '2',
    title: 'Home Theater Installation',
    description: '85" TV with surround sound system and ambient lighting',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'home',
  },
  {
    id: '3',
    title: 'Professional Window Tinting',
    description: 'UV-protective ceramic tint with 15% visibility',
    image: 'https://images.pexels.com/photos/242189/pexels-photo-242189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'automotive',
  },
  {
    id: '4',
    title: 'Multi-Room Audio System',
    description: 'Seamless audio experience throughout the entire home',
    image: 'https://images.pexels.com/photos/279707/pexels-photo-279707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'home',
  },
  {
    id: '5',
    title: 'Custom LED Lighting',
    description: 'Underbody and interior ambient lighting system',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'automotive',
  },
  {
    id: '6',
    title: 'Smart Entertainment Setup',
    description: 'Voice-controlled home theater and lighting system',
    image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'home',
  },
];