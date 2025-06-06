
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { BikeIcon } from '../components/icons/BikeIcon';
import { APP_TITLE } from '../constants';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Mock authentication
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email && password) { // Basic validation
      // In a real app, you'd call an auth service here
      console.log('Login attempt with:', { email, password });
      onLoginSuccess();
    } else {
      setError('Please enter both email and password.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-gray p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <BikeIcon className="h-16 w-16 text-brand-blue mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-brand-gray-dark">{APP_TITLE}</h2>
          <p className="text-brand-gray-medium mt-1">Secure your ride, explore with peace.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={isLoading}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            disabled={isLoading}
            required
          />
          {error && <p className="text-sm text-red-600 mb-4 text-center">{error}</p>}
          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Card>
    </div>
  );
};
    