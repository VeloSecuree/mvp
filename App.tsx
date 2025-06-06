
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { AuthStatus } from './src/types'; // Updated path

const App: React.FC = () => {
  // Initialize authStatus from localStorage or default to UNAUTHENTICATED
  // Use LOADING state to prevent flicker during initial check
  const [authStatus, setAuthStatus] = useState<AuthStatus>(() => {
    const storedAuth = localStorage.getItem('velosecureAuth');
    if (storedAuth === 'true') {
      return AuthStatus.AUTHENTICATED;
    }
    return AuthStatus.UNAUTHENTICATED; // Start as unauthenticated if nothing stored
  });

  useEffect(() => {
    // Persist auth status to localStorage
    if (authStatus === AuthStatus.AUTHENTICATED) {
      localStorage.setItem('velosecureAuth', 'true');
    } else if (authStatus === AuthStatus.UNAUTHENTICATED) {
      localStorage.removeItem('velosecureAuth');
    }
  }, [authStatus]);

  const handleLoginSuccess = () => {
    setAuthStatus(AuthStatus.AUTHENTICATED);
  };

  const handleLogout = () => {
    setAuthStatus(AuthStatus.UNAUTHENTICATED);
  };
  
  // To avoid issues with initial render and redirects, we wait for authStatus to be definitively set.
  // For this MVP, we assume localStorage check is fast enough. 
  // A true LOADING state might involve an async check.

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={
            authStatus === AuthStatus.AUTHENTICATED ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            authStatus === AuthStatus.AUTHENTICATED ? (
              <DashboardPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="*"
          element={
            authStatus === AuthStatus.AUTHENTICATED ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;