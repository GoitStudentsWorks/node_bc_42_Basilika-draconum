import { useWindowSize } from 'hooks/useWindowSize';
import css from './tasks-list.module.scss';

const TasksList = ({ tasks, openModal, currentTask }) => {
  const size = useWindowSize();

  const truncateString = str => {
    if (size.width < 767.9) {
      return str.substring(0, 3) + '...';
    }
    if (str.length > 7) {
      return str.substring(0, 7) + '...';
    }
    return str;
  };

  return (
    <ul className={css.tasksListStyle}>
      {tasks.map((task, index) => {
        if (index >= 2) {
          return null;
        }
        return (
          <li
            key={task._id}
            className={task.priority}
            onClick={() => {
              openModal(true);
              currentTask(task);
            }}
          >
            {truncateString(task.title)}
          </li>
        );
      })}
    </ul>
  );
};

export default TasksList;
