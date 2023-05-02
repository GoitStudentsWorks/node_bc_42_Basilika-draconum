import { isToday, parseISO } from 'date-fns';
import { formattedDay } from 'hooks/fotmattedDay';
import TasksList from '../TasksList/TasksList';
import css from './days-tasks.module.scss';

const DaysWithTasks = ({ day, setOpening, currentTask, handleClick }) => {
  return (
    <td className={css.styledTd} onClick={e => handleClick(e, day.date)}>
      {day.tasks.length > 0 &&
        day.tasks.map(({ tasks }, index) => {
          return (
            <div key={index}>
              <TasksList
                tasks={tasks}
                openModal={setOpening}
                currentTask={currentTask}
              />
              {tasks.length > 2 && (
                <span className={css.span}>+{tasks.length - 2} tasks</span>
              )}
            </div>
          );
        })}
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
