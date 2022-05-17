import { it, expect, describe } from "vitest";
import { bubbleSort } from "../../dist/chapter1/task1-2";

describe("bubbleSort()", () => {
  it("should return a sorted array", () => {
    const array = [2, 1];
    const result = bubbleSort(array);
    const expectedResult = [1, 2];

    expect(result).toEqual(expectedResult);
  });

  it("should return an empty array if an empty array was passed as a parameter", () => {
    const array = [];
    const result = bubbleSort(array);
    const expectedResult = [];

    expect(result).toEqual(expectedResult);
  });
});
