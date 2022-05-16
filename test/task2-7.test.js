import { expect, it } from "vitest";
import { findLongestSequenceOfRandomizedArray, randomizeArray } from "../dist/chapter2/task2-7";

it("should return the longest sequence of ascending numbers in an array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomizedArray = randomizeArray(array);
  const result = findLongestSequenceOfRandomizedArray(randomizedArray);
  const expectedFn = (randomizedArray) => {
    let array = randomizedArray,
      result = [],
      temporaryArray = [],
      longestSequence = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        temporaryArray.push(array[i]);
      } else if (array[i] > array[i + 1]) {
        temporaryArray.push(array[i]);
        result.push(temporaryArray);
        temporaryArray = [];
      } else {
        temporaryArray.push(array[i]);
        result.push(temporaryArray);
        temporaryArray = [];
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (longestSequence.length < result[i].length) {
        longestSequence = result[i];
      }
    }
    return longestSequence;
  };
  expect(result).toEqual(expectedFn(randomizedArray));
});
