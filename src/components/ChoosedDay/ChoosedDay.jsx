import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectArrTasks } from 'redux/tasks/tasksSelectors';
import { selectDate } from 'redux/date/dateSelectors';

import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';

import s from './choosedDay.module.scss';

const ChoosedDay = () => {
  const arrTasks = useSelector(selectArrTasks);
  const currentDay = useSelector(selectDate);
  const [tasksFilter, setTasksFilter] = useState();

  const dayFromParams = new Date(`${currentDay}`).toISOString().slice(0, 10);

  useEffect(() => {
    const filteredTasks = arrTasks?.filter(t => t.date.start.slice(0, 10) === dayFromParams);
    setTasksFilter(filteredTasks);
  }, [dayFromParams, arrTasks, currentDay]);

  return (
    <section className={s.wrapChooseDay}>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasksFilter} />
    </section>
  );
};

export default ChoosedDay;
