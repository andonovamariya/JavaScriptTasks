const DATE1: Date = new Date("2020/11/12 12:00:00");
const DATE2: Date = new Date("2022/12/31 13:40:59");

export const getDatesDifference = (
  firstDate: Date,
  secondDate: Date
): string => {
  const dateDifference: Date = new Date(Math.abs(+firstDate - +secondDate));

  const years: number = dateDifference.getUTCFullYear() - 1970;
  const months: number = dateDifference.getUTCMonth();
  const days: number = dateDifference.getUTCDate() - 1;
  const weeks: number = days >= 7 ? Math.trunc(days / 7) + +(days % 7 > 3) : 0;
  const hours: number = dateDifference.getUTCHours();
  const minutes: number = dateDifference.getUTCMinutes();
  const seconds: number = dateDifference.getUTCSeconds();

  const finalDifference: string | false =
    (years > 0 && years + +(months > 6) + " year(s)") ||
    (months > 0 && months + +(days > 15) + " month(s)") ||
    (weeks > 0 && weeks + " weeks(s)") ||
    (days > 0 && days + +(hours > 12) + " day(s)") ||
    (hours > 0 && days + +(minutes > 30) + " hour(s)") ||
    (minutes > 0 && minutes + +(seconds > 30) + " minute(s)") ||
    (seconds > 0 && seconds + " second(s)");

  console.log(firstDate.toString());
  console.log(secondDate.toString());

  console.log(
    `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
  );
  return finalDifference ? `${finalDifference} ago` : "dates are equal";
};

console.log(getDatesDifference(DATE1, DATE2));
