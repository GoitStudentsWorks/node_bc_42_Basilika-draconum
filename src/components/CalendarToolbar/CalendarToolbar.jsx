import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import styles from './CalendarToolbar.module.css';

const CalendarToolbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formattedCurrentDate = format(new Date(), 'MMMM');

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${formattedCurrentDate}`);
    }
  }, [formattedCurrentDate, navigate, location.pathname]);

  return (
    <div className={styles.wrapper}>
      <PeriodPaginator />
      <PeriodTypeSelect />
    </div>
  );
};

export default CalendarToolbar;
