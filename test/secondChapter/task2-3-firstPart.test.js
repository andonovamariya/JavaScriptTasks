import { describe, expect, it } from "vitest";
import { appendTruthyValues } from "../../dist/chapter2/task2-3-firstPart";

describe("appendTruthyValues", () => {
  it("should append all truthy values from the second array to the first found array element in the first array", () => {
    const array1 = [1, undefined, [1, 2, 3], "test"];
    const array2 = [null, ["First", "Found", "Array"], undefined, 6];
    const result = appendTruthyValues(array1, array2);
    const expectedResult = [
      1,
      undefined,
      [1, 2, 3, ["First", "Found", "Array"], 6],
      "test",
    ];
    expect(result).toEqual(expectedResult);
  });

  it("should return a value of type array", () => {
    const array1 = [1, undefined, [1, 2, 3], "test"];
    const array2 = [null, ["First", "Found", "Array"], undefined, 6];
    const result = appendTruthyValues(array1, array2);
    expect(result).instanceOf(Array);
  });
});
