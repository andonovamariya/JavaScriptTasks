import { expect, it } from "vitest";
import {
  getValuesWeight,
  checkForEquality,
} from "../../dist/chapter2/task2-8-firstPart-anotherWay";

it("should calculate the weight of the elements in a given array", () => {
  const array = [
    null,
    { name: "Mariya" },
    "Test",
    6,
    undefined,
    false,
    new Date(),
  ];

  const result = getValuesWeight(array);
  const expectedFn = (array) => {
    let countersArray = [],
      numberCount = 0,
      nullCount = 0,
      objectCount = 0,
      functionCount = 0,
      undefinedCount = 0,
      booleanCount = 0,
      stringCount = 0,
      dateCount = 0;
    array.forEach((value) => {
      switch (typeof value) {
        case "number":
          numberCount += 4;
          break;
        case "object":
          if (value === null) {
            nullCount += 2;
          } else {
            objectCount += 10;
          }
          break;
        case "function":
          if (value instanceof Date) {
            dateCount += 5;
          } else {
            functionCount += 10;
          }
          break;
        case "undefined":
          undefinedCount += 2;
          break;
        case "boolean":
          booleanCount += 4;
          break;
        case "string":
          stringCount += 8;
          break;
      }
    });
    countersArray.push(
      numberCount,
      nullCount,
      objectCount,
      dateCount,
      functionCount,
      undefinedCount,
      booleanCount,
      stringCount
    );
    return countersArray;
  };
  expect(result).toEqual(expectedFn(array));
});

it("should return true or false if there is an element in the array that has the same weight as passed in the argument", () => {
  const weight = 12;
  const array = [6, "Test", null];
  const result = checkForEquality(weight, array);
  const expectedFn = (weight, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === weight) {
        return true;
      }
    }
    return false;
  };
  expect(result).toBe(expectedFn(weight, array));
});
