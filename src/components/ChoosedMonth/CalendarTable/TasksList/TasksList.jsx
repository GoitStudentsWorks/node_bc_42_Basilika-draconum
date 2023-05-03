import { useMediaQuery } from '@mui/material';
import css from './tasks-list.module.scss';

const TasksList = ({ tasks, openModal, currentTask }) => {
  const screenMobile = useMediaQuery('(max-width: 767.9px)');

  const truncateString = str => {
    if (screenMobile) {
      return str.substring(0, 3) + '...';
    }
    if (str.length > 7) {
      return str.substring(0, 7) + '...';
    }
    return str;
  };

  console.log(tasks)

  return (
    <ul className={css.tasksListStyle}>
      <li
        key={tasks.owner}
        className={
          (tasks.priority === 'low' && css.low) ||
          (tasks.priority === 'medium' && css.medium) ||
          (tasks.priority === 'high' && css.high)
        }
        onClick={() => {
          openModal(true);
          currentTask(tasks);
        }}
      >
        {truncateString(tasks.title)}
      </li>
    </ul>
  );
};

export default TasksList;
