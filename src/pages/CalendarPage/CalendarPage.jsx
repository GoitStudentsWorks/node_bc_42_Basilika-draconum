import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import css from './calendar-page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { getAccessToken } from 'redux/auth/authSelectors';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(getAccessToken);

  useEffect(() => {
     token &&  dispatch(fetchTasks());
  }, [dispatch, token]);

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
