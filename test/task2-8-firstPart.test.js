import { expect, it } from "vitest";
import {
  getValuesWeight,
  checkForEquality,
} from "../dist/chapter2/task2-8-firstPart";

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
      nullWeight = 0,
      objectWeight = 0,
      stringWeight = 0,
      numberWeight = 0,
      undefinedWeight = 0,
      booleanWeight = 0,
      dateWeight = 0;

    for (let i = 0; i <= array.length; i++) {
      if (typeof array[i] !== "undefined" && array[i] === null) {
        nullWeight += 2;
      } else if (
        array[i] instanceof Function ||
        typeof array[i] === "object" ||
        Array.isArray(array[i])
      ) {
        objectWeight += 10;
      } else if (typeof array[i] === "string") {
        stringWeight += 8;
      } else if (typeof array[i] === "number") {
        numberWeight += 4;
      } else if (typeof array[i] === "undefined") {
        undefinedWeight += 2;
      } else if (typeof array[i] === "boolean") {
        booleanWeight += 4;
      } else if (array[i] instanceof Date) {
        dateWeight += 5;
      } else {
        console.log("Wasn't able to find a corresponding value in the array");
      }
    }
    countersArray.push(
      nullWeight,
      objectWeight,
      stringWeight,
      numberWeight,
      undefinedWeight,
      booleanWeight,
      dateWeight
    );
    return countersArray;
  };
  expect(result).toEqual(expectedFn(array));
});

it("should return true or false if there is an element in the array that has the same weight as passed in the argument", () => {
  const weight = 12;
  const array = [6, "Test", null];
  const result = checkForEquality(array, weight);
  const expectedFn = (array, weight) => {
    let answer = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === weight) {
        answer = true;
      }
    }
    if (answer) {
      return true;
    } else {
      return false;
    }
  };
  expect(result).toBe(expectedFn(array, weight));
});
