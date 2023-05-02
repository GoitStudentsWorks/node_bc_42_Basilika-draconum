import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { setDate } from 'redux/date/dateSlice';
import { selectDate } from 'redux/date/dateSelectors';
import styles from './PeriodTypeSelect.module.css';

export const PeriodTypeSelect = () => {
  const choosedDay = useSelector(selectDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const currentDate = format(new Date(), 'yyyy-MM-dd');

  const handleClickMonth = () => {
    dispatch(setDate(currentDate));
    navigate(`/calendar/month/${currentDate}`);
  };

  const handleClickDay = () => {
    dispatch(setDate(currentDate));
    navigate(`/calendar/day/${currentDate}`);
  };

  return (
    <div className={styles.periodTypeSelectMarkUp}>
      <button
        className={
          pathname === `/calendar/month/${choosedDay}`
            ? styles.activeLinkMonth
            : styles.navLinkMonth
        }
        onClick={() => handleClickMonth()}
      >
        Month
      </button>
      <button
        className={
          pathname === `/calendar/day/${choosedDay}`
            ? styles.activeLinkDay
            : styles.navLinkDay
        }
        onClick={() => handleClickDay()}
      >
        Day
      </button>
    </div>
  );
};
