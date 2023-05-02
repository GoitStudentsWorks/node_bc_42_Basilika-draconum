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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
        <Route path="/account" element={<AccountPage />} />
        <Route path="/calendar" element={<CalendarPage />}>
          <Route path="day/:currentDay" element={<ChoosedDay />} />
          <Route path="month/:currentDay" element={<ChoosedMonth />} />
        </Route>
      </Route>

      <Route path="/" element={<PublicRoute component={<StartPage />} />} />
      <Route
        path="/login"
        element={<PublicRoute component={<LoginPage />} />}
      />
      <Route
        path="/register"
        element={<PublicRoute component={<RegisterPage />} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
