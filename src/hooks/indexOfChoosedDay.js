export const indexOfChoosedDay = date => {
  switch (date) {
    case 'MON':
      return 0;
    case 'TUE':
      return 1;
    case 'WED':
      return 2;
    case 'THU':
      return 3;
    case 'FRI':
      return 4;
    case 'SAT':
      return 5;
    case 'SUN':
      return 6;
    default:
      return 0;
  }
};
