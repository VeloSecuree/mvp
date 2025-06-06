
import { Bike } from './models/Bike';
import { Ride } from './models/Ride';

export const MOCK_BIKE: Bike = new Bike(
  'bike-001',
  'VelociRaptor Pro',
  'XLR8000',
  'Midnight Blue',
  {
    address: '123 Bike Lane, Cycleville',
    lastSeen: '2 minutes ago',
  },
  'https://picsum.photos/seed/bike/600/400'
);

export const MOCK_RIDES: Ride[] = [
  new Ride(
    'ride-001',
    'Morning Commute',
    '2024-07-28',
    12.5,
    35,
    21.4,
    'https://picsum.photos/seed/ride1/100/60'
  ),
  new Ride(
    'ride-002',
    'Weekend Trail Adventure',
    '2024-07-27',
    35.2,
    120,
    17.6,
    'https://picsum.photos/seed/ride2/100/60'
  ),
  new Ride(
    'ride-003',
    'Evening City Cruise',
    '2024-07-26',
    8.0,
    25,
    19.2,
    'https://picsum.photos/seed/ride3/100/60'
  ),
  new Ride(
    'ride-004',
    'Quick Errand Run',
    '2024-07-25',
    5.3,
    15,
    21.2,
    'https://picsum.photos/seed/ride4/100/60'
  ),
];

export const APP_TITLE = "Velosecure";
