export const isWeekendDay = date => {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday and Saturday
};

export const weekendDayClassName = 'weekend-day';
