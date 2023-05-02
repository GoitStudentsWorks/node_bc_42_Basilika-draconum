import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../pages/AuthPage/RegisterPage';
import { LoginPage } from 'pages/AuthPage/LoginPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay';

export const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
