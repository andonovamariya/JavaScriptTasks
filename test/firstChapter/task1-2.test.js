import { it, expect } from "vitest";
import { bubbleSort } from "../../dist/chapter1/task1-2";

it("should return a sorted array", () => {
  const array = [3, 1, 2];
  const result = bubbleSort(array);
  const expectedResult = array.sort((n1, n2) => n1 - n2);

  expect(result).toBe(expectedResult);
});
