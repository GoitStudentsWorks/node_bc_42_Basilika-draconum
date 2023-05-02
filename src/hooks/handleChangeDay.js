export const handleChangeDay = (date, amount) => {
  Date.isLeapYear = year => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
  Date.getDaysInMonth = (year, month) => {
    return [
      31,
      Date.isLeapYear(year) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ][month];
  };

  // eslint-disable-next-line no-extend-native
  Date.prototype.isLeapYear = function () {
    return Date.isLeapYear(this.getFullYear());
  };

  // eslint-disable-next-line no-extend-native
  Date.prototype.getDaysInMonth = function () {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
  };

  // eslint-disable-next-line no-extend-native
  Date.prototype.addMonths = function (value) {
    let n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
  };
  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function (value) {
    this.setDate(this.getDate() + value);
    return this;
  };

  const myDate = new Date(date);

  const result1 = myDate.addDays(amount);

  return result1;
};
