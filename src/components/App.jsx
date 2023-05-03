import MainLayout from '../components/MainLayout/MainLayout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RegisterPage } from '../pages/AuthPage/RegisterPage';
import { LoginPage } from 'pages/AuthPage/LoginPage';

import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AccountPage from './../pages/AccountPage/AccountPage';

import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChoosedDay/ChoosedDay';
import CalendarPage from './../pages/CalendarPage/CalendarPage';
import { StartPage } from './../pages/StartPage/StartPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAccessToken);

  useEffect(() => {
    token && dispatch(getCurrentUserThunk());
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<PublicRoute component={<StartPage />} />} />
      <Route
        path="/login"
        element={<PublicRoute component={<LoginPage />} />}
      />
      <Route
        path="/register"
        element={<PublicRoute component={<RegisterPage />} />}
      />
      <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
        <Route path="/account" element={<AccountPage />} />
        <Route path="/calendar" element={<CalendarPage />}>
          <Route path="day/:currentDay" element={<ChoosedDay />} />
          <Route path="month/:currentDay" element={<ChoosedMonth />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
