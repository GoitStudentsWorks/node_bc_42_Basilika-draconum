import TasksColumn from '../TasksColumn/TasksColumn';

import s from './tasksColumnsList.module.scss'

const TasksColumnsList = () => {
  return (
      <div className={s.wrap}>
      <TasksColumn />
      <TasksColumn />
      <TasksColumn/>
    </div>
  )
}

export default TasksColumnsList