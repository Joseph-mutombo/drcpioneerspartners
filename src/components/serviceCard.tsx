
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color?: string;
}

const ServiceCard = ({ icon, title, description, link, color }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-4`}>
          {icon}
        </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="mt-6 inline-flex items-center text-brand-blue-light font-medium hover:text-yellow-500 transition-colors"
      >
        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
