import { TaskToolbar } from 'components/TaskToolbar/TaskToolbar';
import s from './taskColumnCard.module.scss';

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
  const priorityBackgroundColor = choosePriorityTextColor(task?.priority);
  return (
    <li className={s.tasksCard}>
      <p className={s.tasksCard__text}>{task?.title}</p>
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
