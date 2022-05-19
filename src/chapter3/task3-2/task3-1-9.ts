interface Date {
  formatDateByString(stringFormat: string): string;
}
const DATE: Date = new Date();
const STRING = "YYYY-MM-DD HH:mm:ss Is my proof of concept a A!\nMMMM - getMonthLongName\nMMM - getMonthShortName\nM - getMonth\nDo - getDayOfMonth\nDD - getDate\nD - getDate\ndddd - getDayLongName\nddd - getDayShort\ngetQuarter - Q\nW - getWeekOfYear";

Date.prototype.formatDateByString = function formatDateByString(
  chosenString: string
): string {
  let date = this,
    stringFormat: string = chosenString;

  const pad = (digit: number): string => digit.toString().padStart(2, "0");

  const monthName = [
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
  const dayOfWeekName = [
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
    if (index !== 0) {
      return dayOfWeekName[index - 1].substring(0, 3);
    } else {
      return "Sun";
    }
  };

  const getDayLongName = (date: Date): string => {
    const index: number = date.getDay();
    if (index !== 0) {
      return dayOfWeekName[index - 1];
    } else {
      return "Sunday";
    }
  };

  const getMonthShortName = (date: Date): string => {
    const index: number = date.getMonth();
    if (index !== 0) {
      return monthName[index-1].substring(0, 3);
    } else {
      return "Jan";
    }
    
  };

  const getMonthLongName = (date: Date): string => {
    const index: number = date.getMonth();
    if (index !== 0) {
      return monthName[index-1];
    } else {
      return "January";
    }
    
  };

  type Quarter = 1 | 2 | 3 | 4;
  const getQuarter = (): Quarter => {
    if (date.getMonth() < 2) {
      return 1;
    } else if (date.getMonth() < 5) {
      return 2;
    } else if (date.getMonth() < 8) {
      return 3;
    } else if (date.getMonth() < 11) {
      return 4;
    } else {
      return 1;
    }
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

  const getWeekOfYear = (): number => {
    const janFirst: Date = new Date(date.getFullYear(), 0, 1);
    const numberOfDays: number = Math.floor((+date - +janFirst) / (24 * 60 * 60 * 1000));
    const calculatedWeekOfYear: number =  Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
    return calculatedWeekOfYear;
  };

  const dateTokens = {
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
    A: (date: Date) => (date.getHours() < 12 ? "AM" : "PM"),
    a: (date: Date) => (date.getHours() < 12 ? "am" : "pm"),
    HH: (date: Date) => pad(date.getHours()),
    H: (date: Date) => date.getHours(),
    mm: (date: Date) => pad(date.getMinutes()),
    m: (date: Date) => date.getMinutes(),
    ss: (date: Date) => pad(date.getSeconds()),
    s: (date: Date) => date.getSeconds(),
    Q: getQuarter,
    W: getWeekOfYear,
  };

  return Object.entries(dateTokens).reduce((result, [token, func]) => {
    return result.replace(token, func(date).toString());
  }, stringFormat);
};

const formattedDate: string = DATE.formatDateByString(STRING);
console.log(formattedDate);
