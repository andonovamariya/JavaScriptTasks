import { expect, it } from "vitest";
import { calculateNumbersHigherThan } from "../dist/chapter2/task2-4-firstPart";

it("should return the sum of the elements in the array that have value higher than the number passed as argument", () => {
  const array = [1, 2, 3];
  const higherThanNumber = 4;
  const result = calculateNumbersHigherThan(array, higherThanNumber);
  const expectFn = (array, higherThanNumber) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (higherThanNumber < array[i]) {
        sum += array[i];
      }
    }
    return sum;
  };
  expect(result).toBe(expectFn(array, higherThanNumber));
});
