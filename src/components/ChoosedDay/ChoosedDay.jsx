import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import css from './choosed-day.module.scss';

const ChoosedDay = () => {
  return (
    <div className={css.choosedDayWrapper}>
      <DayCalendarHead />
      <TasksColumnsList />
    </div>
  );
};

export default ChoosedDay;
