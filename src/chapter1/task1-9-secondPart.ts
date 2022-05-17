const DATE: Date = new Date("2022-05-16T14:50:28.384Z");
const STRING: string =
  "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";

export const transformDateObjectAdvanced = (date: Date, sentence: string): string => {
  const pad = (num: number): string => num.toString().padStart(2, "0");

  const MONTH_NAME: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const DAY_OF_WEEK: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getDayShortName = (date: Date): string => {
    const index: number = date.getDay();
    return DAY_OF_WEEK[index - 1].substring(0, 3);
  };

  const getDayLongName = (date: Date): string => {
    const index: number = date.getDay();
    return DAY_OF_WEEK[index - 1];
  };

  const getMonthShortName = (date: Date): string => {
    const index: number = date.getMonth();
    return MONTH_NAME[index].substring(0, 3);
  };

  const getMonthLongName = (date: Date): string => {
    const index: number = date.getMonth();
    return MONTH_NAME[index];
  };

  type Quarter = 1 | 2 | 3 | 4;

  const getQuarter = (): Quarter => {
    if (DATE.getMonth() < 2) {
      return 1;
    } else if (DATE.getMonth() < 5) {
      return 2;
    } else if (DATE.getMonth() < 8) {
      return 3;
    } else return 4;
  };

  const getDayOfMonth = (date: Date): string => {
    const day: number = date.getDate();

    if (day === 1) {
      return day + "st";
    } else if (day === 2) {
      return day + "nd";
    } else if (day === 3) {
      return day + "rd";
    } else return day + "th";
  };

  const getWeekOfYear = (date: Date): number => {
    const januaryFirst = (date.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((+date - januaryFirst) / (24 * 60 * 60 * 1000));
    const weekOfYear = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
    return weekOfYear;
};

  const object = {
    YYYY: (date: Date) => date.getFullYear(),
    MMMM: getMonthLongName,
    MMM: getMonthShortName,
    MM: (date: Date) => pad(date.getMonth()),
    M: (date: Date) => date.getMonth(),
    Do: getDayOfMonth,
    DD: (date: Date) => pad(date.getDate()),
    D: (date: Date) => date.getDate(),
    dddd: getDayLongName,
    ddd: getDayShortName,
    E: (date: Date) => date.getDay(),
    HH: (date: Date) => pad(date.getHours()),
    H: (date: Date) => date.getHours(),
    mm: (date: Date) => pad(date.getMinutes()),
    m: (date: Date) => date.getMinutes(),
    ss: (date: Date) => pad(date.getSeconds()),
    s: (date: Date) => date.getSeconds(),
    Q: getQuarter,
    W: getWeekOfYear,
  };

  return Object.entries(object).reduce((result, [pattern, functionPart]) => {
    return result.replace(pattern, functionPart(date).toString());
  }, sentence);
};

console.log(transformDateObjectAdvanced(DATE, STRING));
