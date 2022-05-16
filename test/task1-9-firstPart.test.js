import { it, expect } from "vitest";
import { transormDateObject } from "../dist/chapter1/task1-9-firstPart";

it("should return a formatted string representation of a date object", () => {
  const date = new Date();
  const string = "YYYY-MM-DD HH:mm:ss Is my proof of concept a A!";
  const result = transormDateObject(date, string);
  const resultFn = (date, string) => {
    const pad = (digit) => digit.toString().padStart(2, "0");
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
    return Object.entries(dateTokens).reduce((result, [token, func]) => {
      return result.replace(token, func(date).toString());
    }, string);
  };
  expect(result).toBe(resultFn(date, string));
});
