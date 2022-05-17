import { it, expect, describe } from "vitest";
import { getDatesDifference } from "../../dist/chapter1/task1-8";

describe("getDatesDifference()", () => {
  it("should return the difference in time between the two passed arguments", () => {
    const date1 = new Date("2020/11/12 12:00:00");
    const date2 = new Date("2022/12/31 13:40:59");
    const result = getDatesDifference(date1, date2);
    const expectedResult = "2 year(s) ago";
    expect(result).toBe(expectedResult);
  });

  it("should return value of type string", () => {
    const date1 = new Date("2020/11/12 12:00:00");
    const date2 = new Date("2022/12/31 13:40:59");
    const result = getDatesDifference(date1, date2);
    expect(result).toBeTypeOf("string");
  });
});
