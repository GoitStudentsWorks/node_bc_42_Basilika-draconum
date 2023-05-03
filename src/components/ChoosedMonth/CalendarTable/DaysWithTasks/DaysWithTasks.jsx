import { isToday, parseISO } from 'date-fns';
import { formattedDay } from 'hooks/fotmattedDay';
import TasksList from '../TasksList/TasksList';
import css from './days-tasks.module.scss';

const DaysWithTasks = ({ day, setOpening, currentTask, handleClick }) => {
  const printTask =
    day.tasks.length > 0 &&
    day.tasks.map((task, index) => {
      return index >= 3 ? null : (
        <div key={index}>
          <TasksList
            tasks={task}
            openModal={setOpening}
            currentTask={currentTask}
          />
        </div>
      );
    });

  return (
    <td className={css.styledTd} onClick={e => handleClick(e, day.date)}>
      {printTask}
      <p
        className={
          isToday(parseISO(day.date)) ? css.today : css.styledNumberDay
        }
      >
        {formattedDay(day.date)}
      </p>
    </td>
  );
};

export default DaysWithTasks;
