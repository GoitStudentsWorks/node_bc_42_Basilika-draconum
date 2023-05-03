import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { addDays, add, format, parse } from 'date-fns';
import { indexOfChoosedDay } from 'hooks/indexOfChoosedDay';
import { setDate } from 'redux/date/dateSlice';
import { selectDate } from 'redux/date/dateSelectors';
import css from './day-calendar.module.scss';

const DayCalendarHead = () => {
  const screenMobile = useMediaQuery('(max-width: 767.9px)');
  const choosedDay = useSelector(selectDate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dateFull = parse(choosedDay, 'yyyy-MM-dd', Date.now());
  const dateOfWeek = format(dateFull, 'eee').slice(0, 3).toUpperCase();
  const indexDayOfWeek = indexOfChoosedDay(dateOfWeek);

  const startWeek = addDays(dateFull, -indexDayOfWeek);

  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(add(startWeek, { days: i }));
  }

  const handleClick = date => {
    dispatch(setDate(format(date, 'yyyy-MM-dd')));
    navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
  };

  const formattedDay = date => {
    return date.startsWith('0') ? date.slice(1) : date;
  };

  return (
    <>
      <ul className={css.dayCalendarHeadList}>
        {dates.map(day => {
          return (
            <li key={day} className={css.dayCalendarHeadItem}>
              <p className={css.daysOfWeek}>
                {screenMobile
                  ? format(day, 'eee').slice(0, 1)
                  : format(day, 'eee').toUpperCase()}
              </p>

              <button
                className={
                  choosedDay !== format(day, 'yyyy-MM-dd')
                    ? css.dayCalendarHeadBtn
                    : css.choosedDay
                }
                type="button"
                onClick={() => handleClick(day)}
              >
                {formattedDay(format(day, 'dd'))}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DayCalendarHead;
