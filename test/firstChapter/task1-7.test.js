import { it, expect } from "vitest";
import { convertDateToISO8601 } from "../../dist/chapter1/task1-7";

it("should return the string representation of a given date object in the ISO 8601 format", () => {
  const date = new Date();
  const result = convertDateToISO8601(date);

  const resultFn = () => {
    const pad = (n) => {
      return n < 10 ? "0" + n : n.toString();
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

  expect(result).toBe(resultFn(date));
});
