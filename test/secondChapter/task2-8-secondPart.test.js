import { expect, it } from "vitest";
import { higherWeightThan } from "../../dist/chapter2/task2-8-secondPart";

it("should return true or false if all elements in the array have a higher weight than passed argument", () => {
  const calculatedWeight = 12;
  const inputtedWeight = 12;
  const result = higherWeightThan(calculatedWeight, inputtedWeight);
  const expectedFn = (calculatedWeight, inputtedWeight) => {
    if (calculatedWeight > inputtedWeight) {
      return true;
    } else {
      return false;
    }
  };
  expect(result).toBe(expectedFn(calculatedWeight, inputtedWeight));
});
