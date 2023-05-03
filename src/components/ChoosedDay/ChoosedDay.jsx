import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectArrTasks } from 'redux/tasks/tasksSelectors';
import { fetchTasks } from 'redux/tasks/tasksOperations';

import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

import s from './choosedDay.module.scss';

const ChoosedDay = () => {
  const arrTasks = useSelector(selectArrTasks);
  const dispatch = useDispatch();

  const [tasksFilter, setTasksFilter] = useState();

  const currentDay = '2023-04-28T00:00:00.000Z';

  useEffect(() => {
    const tasks = dispatch(fetchTasks());
    const filteredTasks = tasks.filter(t => t.date.start === currentDay);
    setTasksFilter(filteredTasks);
  }, [currentDay, arrTasks, dispatch]);

  return (
    <div className={s.wrapChooseDay}>
      {/* <DayCalendarHead/> */}
      <TasksColumnsList tasks={tasksFilter} />
    </div>
  );
};

export default ChoosedDay;
// 1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання
// To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колинки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn(To do | In progress | Done).
//   На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера.
// [toDo, inProgress, done]
