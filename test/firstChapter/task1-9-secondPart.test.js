import { it, expect, describe } from "vitest";
import { transformDateObjectAdvanced } from "../../dist/chapter1/task1-9-secondPart";

describe("transformDateObjectAdvanced()", () => {
  it("should return a formatted string representation of a date object", () => {
    const date = new Date("2022-05-16T14:50:28.384Z");
    const string =
      "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";
    const result = transformDateObjectAdvanced(date, string);
    const expectedResult =
      "week 2733 Mon(1) 2022-4ay-16 16th 17:50:28 2 quarter I28 50y proof of concept!";
    expect(result).toBe(expectedResult);
  });

  it("should return a value of type string", () => {
    const date = new Date(
      "Mon May 16 2022 17:14:57 GMT+0300 (Eastern European Summer Time)"
    );
    const string =
      "week W ddd(E) YYYY-MMM-DD Do HH:mm:ss Q quarter Is my proof of concept!";
    const result = transformDateObjectAdvanced(date, string);
    expect(result).toBeTypeOf("string");
  });
});
