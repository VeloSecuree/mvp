
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { BikeIcon } from '../components/icons/BikeIcon';
import { APP_TITLE } from '../src/constants'; // Updated path
import { AuthService } from '../src/services/AuthService'; // Updated path

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const authService = new AuthService(); 

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await authService.login(email, password);

    if (result.success) {
      // In a real app, result.user might be stored in a global state/context
      console.log('Login successful for user:', result.user?.email);
      onLoginSuccess();
    } else {
      setError(result.error || 'Login failed. Please try again.');
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
            aria-required="true"
            aria-describedby={error ? "login-error" : undefined}
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
            aria-required="true"
            aria-describedby={error ? "login-error" : undefined}
          />
          {error && <p id="login-error" role="alert" className="text-sm text-red-600 mb-4 text-center">{error}</p>}
          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Card>
    </div>
  );
};