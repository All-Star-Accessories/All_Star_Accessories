import React from 'react';
import { ServiceItem } from '../../lib/types';
import * as Icons from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = Icons[service.icon as keyof typeof Icons];

  return (
    <div className="service-card flex flex-col h-full">
      <div className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        {IconComponent && <IconComponent className="text-primary h-6 w-6" />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
      <Button variant="outline" className="mt-auto self-start">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;