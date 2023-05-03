import { useMediaQuery } from '@mui/material';
import css from './month-head.module.scss';

const MonthCalendarHead = () => {
  const screenMobile = useMediaQuery('(max-width: 767.9px)');

  return (
    <>
      {screenMobile ? (
        <ul className={css.monthHeadList}>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <li className={css.monthHeadItem}>S</li>
          <li className={css.monthHeadItem}>S</li>
        </ul>
      ) : (
        <ul className={css.monthHeadList}>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li className={css.monthHeadItem}>Sat</li>
          <li className={css.monthHeadItem}>Sun</li>
        </ul>
      )}
    </>
  );
};

export default MonthCalendarHead;
