import MainLayout from '../components/MainLayout/MainLayout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/auth/authOperations';

import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChoosedDay/ChoosedDay';
import CalendarPage from './../pages/CalendarPage/CalendarPage';

const RegisterPage = lazy(() => import('../pages/AuthPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/AuthPage/LoginPage'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const StartPage = lazy(() => import('../pages/StartPage/StartPage'));

// import RegisterPage from '../pages/AuthPage/RegisterPage';
// import LoginPage from '../pages/AuthPage/LoginPage';
// import AccountPage from '../pages/AccountPage/AccountPage';
// import StartPage from '../pages/StartPage/StartPage';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAccessToken);

  useEffect(() => {
    token && dispatch(getCurrentUserThunk());
  }, [dispatch, token]);

  return (
    <Suspense fallback={null}>
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
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
