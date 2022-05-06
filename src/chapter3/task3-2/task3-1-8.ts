interface Date {
  getDatesDifference(compareDate: Date): string;
}

const DATE1: Date = new Date("2020/11/12 12:00:00");
const DATE2: Date = new Date("2022/12/31 13:40:59");

Date.prototype.getDatesDifference = function getDatesDifference(
  chosenCompareDate: Date
): string {
  if (chosenCompareDate instanceof Date) {
    const dateDifference = new Date(Math.abs(+chosenCompareDate - +this));

    const years = dateDifference.getUTCFullYear() - 1970;
    const months = dateDifference.getUTCMonth();
    const days = dateDifference.getUTCDate() - 1;
    const weeks = days >= 7 ? Math.trunc(days / 7) + +(days % 7 > 3) : 0;
    const hours = dateDifference.getUTCHours();
    const minutes = dateDifference.getUTCMinutes();
    const seconds = dateDifference.getUTCSeconds();

    const finalDifference: string | boolean =
      (years > 0 && years + +(months > 6) + " year(s)") ||
      (months > 0 && months + +(days > 15) + " month(s)") ||
      (weeks > 0 && weeks + " weeks(s)") ||
      (days > 0 && days + +(hours > 12) + " day(s)") ||
      (hours > 0 && days + +(minutes > 30) + " hour(s)") ||
      (minutes > 0 && minutes + +(seconds > 30) + " minute(s)") ||
      (seconds > 0 && seconds + " second(s)");

    console.log(this.toString());
    console.log(chosenCompareDate.toString());

    console.log(
      `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    );
    return finalDifference ? `${finalDifference} ago` : "dates are equal";
  }
  return "You entered invalid date input. Try again.";
};

const timeLapse: string = DATE1.getDatesDifference(DATE2);
