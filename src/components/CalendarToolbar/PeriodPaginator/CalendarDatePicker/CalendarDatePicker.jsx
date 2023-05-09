import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parseISO } from 'date-fns';
import { selectDate } from 'redux/date/dateSelectors';
import { setDate } from 'redux/date/dateSlice';
import css from './calendar-picker.module.scss';

const CalendarDatePicker = () => {
  const choosedDay = useSelector(selectDate);
  const dateFull = parseISO(choosedDay, 'yyyy-MM-dd');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {pathname.slice(0, 16) === '/calendar/month/' ? (
        <DatePicker
          dateFormat="MMMM Y"
          selected={dateFull}
          showMonthYearPicker
          onChange={date => {
            dispatch(setDate(format(date, 'yyyy-MM-dd')));
            navigate(`/calendar/month/${format(date, 'yyyy-MMMM')}`);
          }}
          className={css.calendarInput}
        />
      ) : (
        <DatePicker
          dateFormat="d MMMM Y"
          selected={dateFull}
          onChange={date => {
            dispatch(setDate(format(date, 'yyyy-MM-dd')));
            navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
          }}
          className={css.calendarInput}
        />
      )}
    </>
  );
};

export default CalendarDatePicker;
