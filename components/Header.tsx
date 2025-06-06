
import React from 'react';
import { Button } from './ui/Button';
import { LogoutIcon } from './icons/LogoutIcon';
import { BikeIcon } from './icons/BikeIcon';
import { APP_TITLE } from '../src/constants'; // Updated path

interface HeaderProps {
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BikeIcon className="h-8 w-8 text-brand-blue mr-2" />
            <h1 className="text-2xl font-bold text-brand-blue">{APP_TITLE}</h1>
          </div>
          <Button variant="secondary" size="sm" onClick={onLogout} leftIcon={<LogoutIcon />}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};