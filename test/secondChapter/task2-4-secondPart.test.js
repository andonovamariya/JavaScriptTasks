import { expect, it } from "vitest";
import { calculateNumbersDivisible } from "../../dist/chapter2/task2-4-secondPart";

it("should return a new array with the elements that are divisible by the number passed into the array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const divisibleNumber = 2;
  const result = calculateNumbersDivisible(array, divisibleNumber);
  const expectedFn = (array, divisibleNumber) => {
    let divisibleNumbersArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % divisibleNumber === 0) {
        divisibleNumbersArray.push(array[i]);
      }
    }
    return divisibleNumbersArray;
  };
  expect(result).toEqual(expectedFn(array, divisibleNumber));
});
