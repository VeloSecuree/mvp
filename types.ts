
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Bike {
  id: string;
  name: string;
  model: string;
  color: string;
  currentLocation: {
    address: string;
    lastSeen: string;
  };
  imageUrl: string;
}

export interface Ride {
  id: string;
  name: string;
  date: string;
  distanceKm: number;
  durationMinutes: number;
  avgSpeedKmh: number;
  mapImageUrl: string; // For a small preview if needed
}

export enum AuthStatus {
  LOADING,
  AUTHENTICATED,
  UNAUTHENTICATED,
}
    