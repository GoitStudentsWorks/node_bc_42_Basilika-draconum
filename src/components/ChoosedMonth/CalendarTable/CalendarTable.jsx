import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import { setDate } from 'redux/date/dateSlice';
import DaysWithTasks from './DaysWithTasks/DaysWithTasks';
import css from './calendar-table.module.scss';

const CalendarTable = ({ tasks, currentDate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { daysOfMonth, firstDayOfMonth } = useDaysOfMonth(currentDate);

  const daysWithTasks = daysOfMonth.map(day => ({
    date: format(day, 'yyyy-MM-dd'),
    tasks: tasks.filter(
      task => task.date.start.slice(0, 10) === format(day, 'yyyy-MM-dd')
    ),
  }));

  const handleClick = (e, date) => {
    const { currentTarget, target } = e;

    if (currentTarget === target) {
      dispatch(setDate(date));
      navigate(`/calendar/day/${date}`);
    }
  };

  const rows = [];
  const EmptyCells = firstDayOfMonth => {
    return Array.from({ length: firstDayOfMonth }, (_, index) => (
      <td key={`empty-${index}`}></td>
    ));
  };

  let cells = EmptyCells(firstDayOfMonth);

  daysWithTasks.forEach((day, index) => {
    cells.push(
      <DaysWithTasks key={index} day={day} handleClick={handleClick} />
    );

    if (cells.length === 7 || index === daysWithTasks.length - 1) {
      rows.push(<tr key={day.date}>{cells}</tr>);
      cells = [];
    }
  });

  return (
    <>
      <div className={css.calendarTableWrapper}>
        <table className={css.calendarTableStyle}>
          <tbody className={css.claendarTableBody}>{rows}</tbody>
        </table>
      </div>
    </>
  );
};

CalendarTable.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      date: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }).isRequired,
      owner: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }),
    }).isRequired
  ).isRequired,

  currentDate: PropTypes.string.isRequired,
};

export default CalendarTable;
