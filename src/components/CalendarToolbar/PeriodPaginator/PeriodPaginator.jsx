import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format, parse } from 'date-fns';
import { handleChangeMonth } from 'hooks/handleChangeMonth.js';
import { handleChangeDay } from 'hooks/handleChangeDay.js';
import { setDate } from 'redux/date/dateSlice';
import { selectDate } from 'redux/date/dateSelectors';
import styles from './PeriodPaginator.module.css';

export const PeriodPaginator = () => {
  const choosedDay = useSelector(selectDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const dateFull = parse(choosedDay, 'yyyy-MM-dd', Date.now());

  const handlePrevMonth = () => {
    dispatch(setDate(format(handleChangeMonth(dateFull, -1), 'yyyy-MM-dd')));
    navigate(
      `/calendar/month/${format(handleChangeMonth(dateFull, -1), 'yyyy-MM-dd')}`
    );
  };

  const handleNextMonth = () => {
    dispatch(setDate(format(handleChangeMonth(dateFull, 1), 'yyyy-MM-dd')));
    navigate(
      `/calendar/month/${format(handleChangeMonth(dateFull, 1), 'yyyy-MM-dd')}`
    );
  };

  const handlePrevDay = () => {
    dispatch(setDate(format(handleChangeDay(dateFull, -1), 'yyyy-MM-dd')));
    navigate(
      `/calendar/day/${format(handleChangeDay(dateFull, -1), 'yyyy-MM-dd')}`
    );
  };

  const handleNextDay = () => {
    dispatch(setDate(format(handleChangeDay(dateFull, 1), 'yyyy-MM-dd')));
    navigate(
      `/calendar/day/${format(handleChangeDay(dateFull, 1), 'yyyy-MM-dd')}`
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.nameContainer}>
        <p className={styles.name}>
          {pathname === `/calendar/month/${choosedDay}`
            ? format(dateFull, 'MMMM Y')
            : format(dateFull, 'd MMMM Y')}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${styles.buttonLeft}`}
          type="button"
          onClick={
            pathname === `/calendar/month/${choosedDay}`
              ? handlePrevMonth
              : handlePrevDay
          }
        ></button>
        <button
          className={`${styles.button} ${styles.buttonRight}`}
          type="button"
          onClick={
            pathname === `/calendar/month/${choosedDay}`
              ? handleNextMonth
              : handleNextDay
          }
        ></button>
      </div>
    </div>
  );
};
