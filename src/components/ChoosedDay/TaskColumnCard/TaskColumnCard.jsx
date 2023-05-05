import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';
import s from './taskColumnCard.module.scss';

const maxLengthTitle = 25;

const truncateString = str => {
  if (str?.length <= maxLengthTitle) {
    return str;
  } else {
    return str?.slice(0, maxLengthTitle) + '...';
  }
};

const choosePriorityTextColor = priority => {
  if (priority === 'low') {
    return 'var(--bgColor-range-low)';
  }
  if (priority === 'medium') {
    return 'var(--bgColor-range-medium)';
  }
  if (priority === 'high') {
    return 'var(--bgColor-range-high)';
  }
};

const TaskColumnCard = ({ task }) => {
  const titleWithThreeDots = truncateString(task?.title);
  const priorityBackgroundColor = choosePriorityTextColor(task?.priority);
  return (
      <li className={s.tasksCard}>
        <p className={s.tasksCard__text}>{titleWithThreeDots}</p>
        <div className={s.tasksCard__bottomWrap}>
          <span
            style={{ backgroundColor: priorityBackgroundColor }}
            className={s.tasksCard__riority}
          >
            {task?.priority}
          </span>
          <TaskToolbar task={task} />
        </div>
      </li>
  );
};

export default TaskColumnCard;
