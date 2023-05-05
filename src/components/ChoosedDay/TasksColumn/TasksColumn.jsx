import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';

import s from './tasksColumn.module.scss';

const TasksColumn = ({ title, tasks }) => {

  return (
    <li className={s.tasksColumnWrap}>
      <ColumnHeadBar title={title} progressType={title} />
      {tasks?.length !== 0 && <ColumnsTasksList tasks={tasks} progressType={title} />}
      <AddTaskBtn
        text={'Add task'}
        icon={'plus'}
        progressType={title}
      />
    </li>
  );
};

export default TasksColumn;
