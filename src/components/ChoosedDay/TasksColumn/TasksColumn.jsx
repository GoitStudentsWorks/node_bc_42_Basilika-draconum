

import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';

import s from './tasksColumn.module.scss'

const TasksColumn = ({ title, tasks, getTask }) => {


  return (
    <div className={s.tasksColumnWrap} >
      <ColumnHeadBar title={title} />
      <ColumnsTasksList />
      <AddTaskBtn text={"Add task"} icon={"plus"} />
    </div>
  );
};

export default TasksColumn;
// "1. Компонент отримує в пропсах заголовок групи завданнь та колекцію завданнь цієї групи.
// 2. Компонент рендерить:
//  - ColumnHeadBar - компонент з назвою колонки та кнопою для створення завдання в цій колонці.
//  - ColumnTasksList - компонент що показує список завдань, рендериться за умови, що відповідні завдання є в наявності.
//  - AddTaskBtn - кнопка для додавання завдання в колонку."
