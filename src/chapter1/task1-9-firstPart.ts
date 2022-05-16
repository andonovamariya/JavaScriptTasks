const DATE: Date = new Date();
const STRING: string = "YYYY-MM-DD HH:mm:ss Is my proof of concept a A!";

export function transormDateObject(date: Date, string: string): string {
  const pad = (digit: number): string => digit.toString().padStart(2, "0");

  const dateTokens = {
    YYYY: (date: Date) => date.getFullYear(),
    MM: (date: Date) => pad(date.getMonth()),
    M: (date: Date) => date.getMonth(),
    DD: (date: Date) => pad(date.getDate()),
    D: (date: Date) => date.getDate(),
    A: (date: Date) => (date.getHours() < 12 ? "AM" : "PM"),
    a: (date: Date) => (date.getHours() < 12 ? "am" : "pm"),
    HH: (date: Date) => pad(date.getHours()),
    H: (date: Date) => date.getHours(),
    mm: (date: Date) => pad(date.getMinutes()),
    m: (date: Date) => date.getMinutes(),
    ss: (date: Date) => pad(date.getSeconds()),
    s: (date: Date) => date.getSeconds(),
  };

  return Object.entries(dateTokens).reduce((result, [token, func]) => {
    return result.replace(token, func(date).toString());
  }, string);
}

console.log(transormDateObject(DATE, STRING));
