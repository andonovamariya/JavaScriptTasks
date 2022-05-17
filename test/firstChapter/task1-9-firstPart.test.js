import { it, expect, describe } from "vitest";
import { transormDateObject } from "../../dist/chapter1/task1-9-firstPart";

describe("transormDateObject()", () => {
  it("should return a formatted string representation of a date object", () => {
    const date = new Date("Thu Sep 15 2016 02:32:00 GMT-0400 (EDT)");
    const string = "YYYY-MM-DD HH:mm:ss Is my proof of concept a A!";
    const result = transormDateObject(date, string);
    const expectedResult = "2016-08-15 09:32:00 I0 32y proof of concept am AM!";
    expect(result).toBe(expectedResult);
  });

  it("should return value of type string", () => {
    const date = new Date("Thu Sep 15 2016 02:32:00 GMT-0400 (EDT)");
    const string = "YYYY-MM-DD HH:mm:ss Is my proof of concept a A!";
    const result = (date, string);
    expect(result).toBeTypeOf("string");
  });
});
