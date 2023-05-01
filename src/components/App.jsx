import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../pages/AuthPage/RegisterPage';
import { LoginPage } from 'pages/AuthPage/LoginPage';
import ChoosedDay from './ChoosedDay/ChoosedDay';

export const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ChoosedDay/>} />
      
    </Routes>
  );
};
