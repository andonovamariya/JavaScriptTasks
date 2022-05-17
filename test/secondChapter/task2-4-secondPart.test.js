import { describe, expect, it } from "vitest";
import { calculateNumbersDivisible } from "../../dist/chapter2/task2-4-secondPart";

describe("calculateNumbersDivisible", () => {
  it("should return the elements that are divisible by the number passed into the array", () => {
    const array = [1, 4];
    const divisibleNumber = 2;
    const result = calculateNumbersDivisible(array, divisibleNumber);
    const expectedResult = [4];
    expect(result).toEqual(expectedResult);
  });

  it("should return a value of type Array", () => {
    const array = [1, 4];
    const divisibleNumber = 2;
    const result = calculateNumbersDivisible(array, divisibleNumber);
    expect(result).toBeInstanceOf(Array);
  });
});
