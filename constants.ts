
import { Bike, Ride } from './types';

export const MOCK_BIKE: Bike = {
  id: 'bike-001',
  name: 'VelociRaptor Pro',
  model: 'XLR8000',
  color: 'Midnight Blue',
  currentLocation: {
    address: '123 Bike Lane, Cycleville',
    lastSeen: '2 minutes ago',
  },
  imageUrl: 'https://picsum.photos/seed/bike/600/400', // Placeholder bike image
};

export const MOCK_RIDES: Ride[] = [
  {
    id: 'ride-001',
    name: 'Morning Commute',
    date: '2024-07-28',
    distanceKm: 12.5,
    durationMinutes: 35,
    avgSpeedKmh: 21.4,
    mapImageUrl: 'https://picsum.photos/seed/ride1/100/60',
  },
  {
    id: 'ride-002',
    name: 'Weekend Trail Adventure',
    date: '2024-07-27',
    distanceKm: 35.2,
    durationMinutes: 120,
    avgSpeedKmh: 17.6,
    mapImageUrl: 'https://picsum.photos/seed/ride2/100/60',
  },
  {
    id: 'ride-003',
    name: 'Evening City Cruise',
    date: '2024-07-26',
    distanceKm: 8.0,
    durationMinutes: 25,
    avgSpeedKmh: 19.2,
    mapImageUrl: 'https://picsum.photos/seed/ride3/100/60',
  },
  {
    id: 'ride-004',
    name: 'Quick Errand Run',
    date: '2024-07-25',
    distanceKm: 5.3,
    durationMinutes: 15,
    avgSpeedKmh: 21.2,
    mapImageUrl: 'https://picsum.photos/seed/ride4/100/60',
  },
];

export const APP_TITLE = "Velosecure";
    