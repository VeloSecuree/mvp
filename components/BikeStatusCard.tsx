
import React from 'react';
import { Bike } from '../types';
import { Card } from './ui/Card';
import { LocationPinIcon } from './icons/LocationPinIcon';
import { BikeIcon } from './icons/BikeIcon';

interface BikeStatusCardProps {
  bike: Bike;
}

export const BikeStatusCard: React.FC<BikeStatusCardProps> = ({ bike }) => {
  return (
    <Card title="My Bike Status" className="mb-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <img 
          src={bike.imageUrl} 
          alt={`${bike.name} - ${bike.model}`} 
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mr-0 sm:mr-6 mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold text-brand-gray-dark flex items-center justify-center sm:justify-start">
            <BikeIcon className="w-7 h-7 mr-2 text-brand-blue" /> {bike.name}
          </h3>
          <p className="text-brand-gray-medium">{bike.model} - {bike.color}</p>
          
          <div className="mt-4 pt-4 border-t border-brand-gray-light">
            <div className="flex items-center text-brand-gray-dark mb-1 justify-center sm:justify-start">
              <LocationPinIcon className="w-5 h-5 mr-2 text-green-500" />
              <span className="font-semibold">Current Location:</span>
            </div>
            <p className="text-brand-gray-medium">{bike.currentLocation.address}</p>
            <p className="text-xs text-brand-gray-medium italic">Last seen: {bike.currentLocation.lastSeen}</p>
          </div>
           <div className="mt-3">
             <img 
                src={`https://picsum.photos/seed/${bike.id}_map/400/200`}
                alt="Map placeholder"
                className="rounded-md w-full h-32 object-cover"
              />
           </div>
        </div>
      </div>
    </Card>
  );
};
    