import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import s from './columnsTasksList.module.scss';

const ColumnsTasksList = ({ tasks }) => {
  return (
    <ul className={s.taskslistSWrap}>
      {tasks &&
        tasks?.map(task => <TaskColumnCard key={task?._id} task={task} />)}
    </ul>
  );
};

export default ColumnsTasksList;
