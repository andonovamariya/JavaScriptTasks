import { describe, expect, it } from "vitest";
import { higherWeightThan } from "../../dist/chapter2/task2-8-secondPart";

describe("higherWeightThan()", () => {
  it("should return true if all elements in the array have a higher weight than passed argument", () => {
    const calculatedWeight = 55;
    const inputtedWeight = 12;
    const result = higherWeightThan(calculatedWeight, inputtedWeight);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("should return false if all elements in the array have a lower weight than passed argument", () => {
    const calculatedWeight = 5;
    const inputtedWeight = 12;
    const result = higherWeightThan(calculatedWeight, inputtedWeight);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });

  it("should return a value of type Boolean", () => {
    const calculatedWeight = 5;
    const inputtedWeight = 12;
    const result = higherWeightThan(calculatedWeight, inputtedWeight);
    expect(result).toBeTypeOf("boolean");
  });
});
