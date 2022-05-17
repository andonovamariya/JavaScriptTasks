import { describe, expect, it } from "vitest";
import { calculateNumbersHigherThan } from "../../dist/chapter2/task2-4-firstPart";

describe("calculateNumbersHigherThan()", () => {
  it("should return the sum of the elements in the array that have value higher than the number passed as argument", () => {
    const array = [4, 5, 6];
    const higherThanNumber = 4;
    const result = calculateNumbersHigherThan(array, higherThanNumber);
    const expectedResult = 11;
    expect(result).toBe(expectedResult);
  });

  it("should return a value of type Number", () => {
    const array = [4, 5, 6];
    const higherThanNumber = 4;
    const result = calculateNumbersHigherThan(array, higherThanNumber);
    expect(result).toBeTypeOf("number");
  });
});
