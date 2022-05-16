const CHOSEN_DATE: Date = new Date();

export const convertDateToISO8601 = (chosenDate: Date): string => {
  const date: Date = chosenDate;
  const pad = (n: number): string => {
    let digit: number = n;
    return digit < 10 ? "0" + digit : digit.toString();
  };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    " " +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    "." +
    pad(date.getMilliseconds())
  );
};

console.log(convertDateToISO8601(CHOSEN_DATE));

