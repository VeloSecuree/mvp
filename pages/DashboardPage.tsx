
import React from 'react';
import { MOCK_BIKE, MOCK_RIDES } from '../src/constants'; // Updated path
import { BikeStatusCard } from '../src/components/BikeStatusCard'; // Updated path
import { RideListItem } from '../src/components/RideListItem'; // Updated path
import { Card } from '../components/ui/Card';
import { Header } from '../components/Header';
import { RouteIcon } from '../components/icons/RouteIcon';

interface DashboardPageProps {
  onLogout: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-brand-gray">
      <Header onLogout={onLogout} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <BikeStatusCard bike={MOCK_BIKE} />

        <Card titleClassName="flex items-center" title={
          <>
            <RouteIcon className="w-6 h-6 mr-2 text-brand-blue" /> Recent Rides
          </>
        }>
          {MOCK_RIDES.length > 0 ? (
            <ul className="space-y-4">
              {MOCK_RIDES.map((ride) => (
                <RideListItem key={ride.id} ride={ride} />
              ))}
            </ul>
          ) : (
            <p className="text-brand-gray-medium text-center py-4">No rides recorded yet. Get out and cycle!</p>
          )}
        </Card>
      </main>
    </div>
  );
};