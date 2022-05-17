import { describe, expect, it } from "vitest";
import {
  getValuesWeight,
  checkForEquality,
} from "../../dist/chapter2/task2-8-firstPart-anotherWay";

describe("getValuesWeight()", () => {
  it("should calculate the weights of the elements in a given array", () => {
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
    const expectedResult = [4, 2, 20, 0, 0, 2, 4, 8];
    expect(result).toEqual(expectedResult);
  });
});

describe("checkForEquality()", () => {
  it("should return true if there is an element in the array that has the same weight as passed in the argument", () => {
    const weight = 8;
    const array = [4, 1];
    const result = checkForEquality(weight, array);
    expect(result).toBeTruthy;
  });

  it("should return false if there is an element in the array that has higher weight than passed in the argument", () => {
    const weight = 8;
    const array = [4, 4, "Mariya"];
    const result = checkForEquality(weight, array);
    expect(result).toBeFalsy;
  });

  it("should return false if there is an element in the array that has lower weight than passed in the argument", () => {
    const weight = 12;
    const array = [6, "Test"];
    const result = checkForEquality(weight, array);
    expect(result).toBeFalsy;
  });
});
