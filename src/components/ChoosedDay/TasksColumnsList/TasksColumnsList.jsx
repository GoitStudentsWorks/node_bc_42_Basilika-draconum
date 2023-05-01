import TasksColumn from '../TasksColumn/TasksColumn';

import s from './tasksColumnsList.module.scss'

const TasksColumnsList = () => {
  return (
      <div className={s.wrap}>
      <TasksColumn  title={"To do"}/>
      <TasksColumn title={"In progress"}/>
      <TasksColumn title={"Done"}/>
    </div>
  )
}

export default TasksColumnsList