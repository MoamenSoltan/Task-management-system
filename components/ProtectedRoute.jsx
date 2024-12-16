import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useSelector(state => state.users);
  
  if (!currentUser || Object.keys(currentUser).length === 0) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  // If user is logged in, allow access to the route
  return children;
}

export default ProtectedRoute;
