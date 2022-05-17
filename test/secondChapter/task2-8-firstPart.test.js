import { describe, expect, it } from "vitest";
import {
  getValuesWeight,
  checkForEquality,
} from "../../dist/chapter2/task2-8-firstPart";

describe("getValuesWeight()", () => {
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
    const expectedResult = [2, 20, 8, 4, 4, 4, 0];
    expect(result).toEqual(expectedResult);
  });
});

describe("checkForEquality()", () => {
  it("should return false if the weight of an array doesn't equal the inputted weight", () => {
    const array = [
      null,
      { name: "Mariya" },
      "Test",
      6,
      undefined,
      false,
      new Date(),
    ];
    const weight = 5;

    const result = checkForEquality(array, weight);

    expect(result).toBeFalsy;
  });
});
