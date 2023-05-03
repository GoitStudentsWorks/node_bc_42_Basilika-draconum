import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectArrTasks } from 'redux/tasks/tasksSelectors';


import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import s from './choosedDay.module.scss';
import { selectDate } from 'redux/date/dateSelectors';

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
    <div className={s.wrapChooseDay}>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasksFilter} />
    </div>
  );
};

export default ChoosedDay;