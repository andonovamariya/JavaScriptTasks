import { it, expect } from "vitest";
import { oddElements } from "../dist/chapter1/task1-1";

it("should return 0 if an empty array is passed", () => {
  // Arrange
  const array = [];

  // Act
  const result = oddElements(array);

  // Assert
  expect(result).toBe(0);
});

it("should return the sum of all odd elements", () => {
  const array = [1, 2];
  const result = oddElements(array);
  const expectedFn = () => {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        counter++;
      }
    }
    return counter;
  };

  expect(result).toBe(expectedFn(array));
});
