import { describe, expect, it } from "vitest";
import { findLongestSequenceOfRandomizedArray } from "../../dist/chapter2/task2-7";

describe("findLongestSequenceOfRandomizedArray()", () => {
  it("should return a value of type Array", () => {
    const array = [2, 1];
    const result = findLongestSequenceOfRandomizedArray(array);

    expect(result).toBeInstanceOf(Array);
  });

  it("should return the longest sequence of numbers in ascending order", () => {
    const array = [5, 2, 1, 2, 3];
    const result = findLongestSequenceOfRandomizedArray(array);
    const expectedResult = [1, 2, 3];
    expect(result).toEqual(expectedResult);
  });
});
