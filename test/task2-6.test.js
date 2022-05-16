import { expect, it } from "vitest";
import { removeInnerPercentage } from "../dist/chapter2/task2-6";

it("should remove the inner percentage of the elements from an array", () => {
  const array = [1, 2, 3, 4];
  const percent = 80;
  const result = removeInnerPercentage(array, percent);
  const expectedFn = (array, percent) => {
    let calculatedPercentage = (percent / 100) * array.length;
    const calculatedMiddle = Math.floor(calculatedPercentage / 2);
    let result = [
      ...array.slice(0, calculatedMiddle),
      ...array.slice(-calculatedMiddle),
    ];
    return result;
  };
  expect(result).toEqual(expectedFn(array, percent));
});
