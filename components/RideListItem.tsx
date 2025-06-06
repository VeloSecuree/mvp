
import React from 'react';
import { Ride } from '../types';
import { RouteIcon } from './icons/RouteIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface RideListItemProps {
  ride: Ride;
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const RideListItem: React.FC<RideListItemProps> = ({ ride }) => {
  return (
    <li className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-150 flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img 
          src={ride.mapImageUrl} 
          alt={`Map for ${ride.name}`} 
          className="w-16 h-12 object-cover rounded" 
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between">
           <h4 className="text-md font-semibold text-brand-gray-dark">{ride.name}</h4>
           <p className="text-xs text-brand-gray-medium">{formatDate(ride.date)}</p>
        </div>
        <div className="text-sm text-brand-gray-medium mt-1 grid grid-cols-2 sm:grid-cols-3 gap-x-2">
          <span>Dist: <strong>{ride.distanceKm.toFixed(1)} km</strong></span>
          <span>Time: <strong>{ride.durationMinutes} min</strong></span>
          <span className="hidden sm:inline">Speed: <strong>{ride.avgSpeedKmh.toFixed(1)} km/h</strong></span>
        </div>
      </div>
      <div className="flex-shrink-0">
        <ChevronRightIcon className="w-5 h-5 text-brand-gray-medium" />
      </div>
    </li>
  );
};
    