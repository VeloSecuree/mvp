
import { User } from '../types'; // Assuming User interface remains for now for simplicity

// Mock user for successful login
const MOCK_USER: User = {
  id: 'user-123',
  email: 'test@example.com',
  name: 'Test User',
};

export class AuthService {
  async login(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Basic mock validation
    if (email && password) {
      // In a real app, you'd verify credentials against a backend
      // For this mock, any non-empty email/password combination works
      // and returns the MOCK_USER.
      // You could add specific credentials check here, e.g.,
      // if (email === 'user@example.com' && password === 'password123')
      console.log('AuthService: Login attempt with:', { email }); // Password not logged for security
      return { success: true, user: MOCK_USER };
    } else {
      return { success: false, error: 'Please enter both email and password.' };
    }
  }

  async logout(): Promise<void> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('AuthService: Logout successful.');
    // In a real app, this would invalidate a session/token on the backend
  }
}
