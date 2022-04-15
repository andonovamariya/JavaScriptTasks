const DATE = new Date();
const STRING = "YYYY-MM-DD HH:mm:ss Is my proof of concept a A!";

const pad = (digit) => {
  if (digit <= 9) {
    digit = "0" + digit;
  }
  return digit;
};

const dateTokens = {
  YYYY: (date) => date.getFullYear(),
  MM: (date) => pad(date.getMonth()),
  M: (date) => date.getMonth(),
  DD: (date) => pad(date.getDate()),
  D: (date) => date.getDate(),
  A: (date) => (date.getHours() < 12 ? "AM" : "PM"),
  a: (date) => (date.getHours() < 12 ? "am" : "pm"),
  HH: (date) => pad(date.getHours()),
  H: (date) => date.getHours(),
  mm: (date) => pad(date.getMinutes()),
  m: (date) => date.getMinutes(),
  ss: (date) => pad(date.getSeconds()),
  s: (date) => date.getSeconds(),
};

const tokenFill = (date, string) => {
  return Object.entries(dateTokens).reduce((result, [token, func]) => {
    return result.replace(token, func(date));
  }, string);
};

console.log(tokenFill(DATE, STRING));
