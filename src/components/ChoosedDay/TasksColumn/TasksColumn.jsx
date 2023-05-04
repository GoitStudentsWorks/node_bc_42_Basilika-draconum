import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';

import s from './tasksColumn.module.scss';

const TasksColumn = ({ title, tasks }) => {
  const chooseProgressType = title => {
    if (title === 'To do') {
      return 'toDo';
    }
    if (title === 'In progress') {
      return 'inProgress';
    }
    if (title === 'high') {
      return 'Done';
    }
  };

  return (
    <li className={s.tasksColumnWrap}>
      <ColumnHeadBar title={title} progressType={chooseProgressType} />
      {tasks?.length !== 0 && <ColumnsTasksList tasks={tasks} progressType={chooseProgressType} />}
      <AddTaskBtn
        text={'Add task'}
        icon={'plus'}
        progressType={chooseProgressType}
      />
    </li>
  );
};

export default TasksColumn;
