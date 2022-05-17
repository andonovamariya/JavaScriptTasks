import { describe, expect, it } from "vitest";
import { removeInnerPercentage } from "../../dist/chapter2/task2-6";

describe("removeInnerPercentage()", () => {
  it("should remove the inner percentage of the elements from an array", () => {
    const array = [1, 2, 3, 4];
    const percent = 50;
    const result = removeInnerPercentage(array, percent);
    const expectedResult = [1, 4];
    expect(result).toEqual(expectedResult);
  });

  it("should return a value of type Array", () => {
    const array = [1, 2, 3, 4];
    const percent = 50;
    const result = removeInnerPercentage(array, percent);
    expect(result).toBeInstanceOf(Array);
  });
});
