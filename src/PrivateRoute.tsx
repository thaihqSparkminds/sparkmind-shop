import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

export default function PrivateRoute(props: RouteProps) {
  // Checks if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
