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

  const dayFromParams = new Date(`${currentDay}`).toISOString();

  useEffect(() => {
    const filteredTasks = arrTasks?.filter(t => t.date.start === dayFromParams);
    setTasksFilter(filteredTasks);
  }, [dayFromParams, arrTasks]);

  return (
    <section className={s.wrapChooseDay}>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasksFilter} />
    </section>
  );
};

export default ChoosedDay;
