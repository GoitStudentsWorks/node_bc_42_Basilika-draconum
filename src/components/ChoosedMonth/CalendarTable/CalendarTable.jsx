import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import { setDate } from 'redux/date/dateSlice';
import DaysWithTasks from './DaysWithTasks/DaysWithTasks';
// import { TaskModal } from '.';
import css from './calendar-table.module.scss';

const CalendarTable = ({ tasks, currentDate }) => {
  const [isOpened, setOpening] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { daysOfMonth, firstDayOfMonth } = useDaysOfMonth(currentDate);

  const daysWithTasks = daysOfMonth.map(day => ({
    date: format(day, 'yyyy-MM-dd'),
    tasks: tasks.filter(task => task.date === format(day, 'yyyy-MM-dd')),
  }));

  const handleClick = (e, date) => {
    const { currentTarget, target } = e;

    if (currentTarget === target) {
      dispatch(setDate(date));
      navigate(`/calendar/day/${date}`);
    }
  };

  //   const formattedDate = () => {
  //     if (selectedTask) {
  //       const date = new Date(selectedTask.date);
  //       const formattedDate = format(date, 'yyyy-MM-dd');

  //       return formattedDate;
  //     }
  //   };

  //   const handleToggleModal = () => {
  //     setOpening(!isOpened);
  //   };

  const currentTask = data => {
    setSelectedTask(data);
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
      <DaysWithTasks
        key={index}
        day={day}
        setOpening={setOpening}
        currentTask={currentTask}
        handleClick={handleClick}
      />
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
          <tbody>{rows}</tbody>
        </table>
      </div>

      {/* {isOpened && (
        <TaskModal
          date={formattedDate()}
          type="Edit"
          onCloseModal={handleToggleModal}
          category={selectedTask.category}
          id={selectedTask._id}
          title={selectedTask.title}
          priority={selectedTask.priority}
          start={selectedTask.start}
          end={selectedTask.end}
        />
      )} */}
    </>
  );
};

CalendarTable.propTypes = {
  //   tasks: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       date: PropTypes.string.isRequired,
  //       tasks: PropTypes.arrayOf(
  //         PropTypes.shape({
  //           title: PropTypes.string.isRequired,
  //           status: PropTypes.string.isRequired,
  //           date: PropTypes.objectOf(
  //             PropTypes.shape({
  //               start: PropTypes.string.isRequired,
  //               end: PropTypes.string.isRequired,
  //             })
  //           ),
  //           owner: PropTypes.string.isRequired,
  //         })
  //       ),
  //     }).isRequired
  //   ),
  currentDate: PropTypes.string.isRequired,
};

export default CalendarTable;
