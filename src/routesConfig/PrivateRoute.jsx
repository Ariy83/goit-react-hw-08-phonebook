import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLogIn } from '../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLogIn = useSelector(selectIsLogIn);
  const location = useLocation();
  if (isLogIn) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" />;
};
