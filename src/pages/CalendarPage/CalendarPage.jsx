import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import css from './calendar-page.module.scss';

const CalendarPage = () => {
  return (
    <div className={css.calendarPageContainer}>
      <CalendarToolbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
