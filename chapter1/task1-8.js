const DATE1 = new Date("2020/11/12 12:00:00");
const DATE2 = new Date("2022/12/31 13:40:59");

const getDatesDifference = (date1, date2) => {
  const dateDifference = new Date(Math.abs(date2 - date1));

  const years = dateDifference.getUTCFullYear() - 1970;
  const months = dateDifference.getUTCMonth();
  const days = dateDifference.getUTCDate() - 1;
  const weeks = days >= 7 ? Math.trunc(days / 7) + (days % 7 > 3) : 0;
  const hours = dateDifference.getUTCHours();
  const minutes = dateDifference.getUTCMinutes();
  const seconds = dateDifference.getUTCSeconds();

  const finalDifference =
    (years > 0 && years + (months > 6) + " year(s)") ||
    (months > 0 && months + (days > 15) + " month(s)") ||
    (weeks > 0 && weeks + " weeks(s)") ||
    (days > 0 && days + (hours > 12) + " day(s)") ||
    (hours > 0 && days + (minutes > 30) + " hour(s)") ||
    (minutes > 0 && minutes + (seconds > 30) + " minute(s)") ||
    (seconds > 0 && seconds + " second(s)");

  console.log(date1.toString());
  console.log(date2.toString());

  console.log(
    `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
  );
  return finalDifference ? `${finalDifference} ago` : "dates are equal";
};

console.log(getDatesDifference(DATE1, DATE2));
