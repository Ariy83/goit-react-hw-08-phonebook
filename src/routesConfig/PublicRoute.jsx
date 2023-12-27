import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLogIn } from '../redux/auth/selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogIn);
  const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />;
  }
  return children;
};
