import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import PhoneBook from '../pages/PhoneBook/PhoneBook';
import NotFound from '../pages/NotFound';
import { selectIsRefresh } from '../redux/auth/selectors';
import { Loader } from './Loader/Loader';
import { PublicRoute } from '../routesConfig/PublicRoute';
import { PrivateRoute } from '../routesConfig/PrivateRoute';
import Homepage from '../pages/Homepage/Homepage';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefresh = useSelector(selectIsRefresh);

  return isRefresh ? (
    <Loader />
  ) : (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <PhoneBook />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
