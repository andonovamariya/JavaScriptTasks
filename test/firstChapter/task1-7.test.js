import { it, expect, describe } from "vitest";
import { convertDateToISO8601 } from "../../dist/chapter1/task1-7";

describe("convertDateToISO8601()", () => {
  it("should return the string representation of a given date object in the ISO 8601 format", () => {
    const date = new Date("May 17 2007");
    const result = convertDateToISO8601(date);
    const expectedResult = "2007-05-17 00:00:00.00";

    expect(result).toBe(expectedResult);
  });

  it("should return value of type string", () => {
    const date = new Date();
    const result = convertDateToISO8601(date);
    expect(result).toBeTypeOf("string");
  });
});
