import TasksColumn from '../TasksColumn/TasksColumn';

import s from './tasksColumnsList.module.scss'

const TasksColumnsList = ({ tasks }) => {

  //  const filterTodo = tasks.filter(task => task.status === 'toDo');
  // const filterInProgress = tasks.filter(task => task.status === 'inProgress');
  // const filterDone = tasks.filter(task => task.status === 'done');
  return (
      <div className={s.wrap}>
      {/* <TasksColumn  title={"To do"}  tasks={filterTodo}/>
      <TasksColumn title={"In progress"} tasks={filterInProgress}/>
      <TasksColumn title={"Done"}  tasks={filterDone}/> */}
       <TasksColumn  title={"To do"}  />
      <TasksColumn title={"In progress"} />
      <TasksColumn title={"Done"}  />
    </div>
  )
}

export default TasksColumnsList