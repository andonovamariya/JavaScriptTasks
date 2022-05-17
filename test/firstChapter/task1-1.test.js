import { it, expect, describe } from "vitest";
import { oddElements } from "../../dist/chapter1/task1-1";

describe("oddElements()", () => {
  it("should return 0 if an empty array is passed", () => {
    const array = [];
    const result = oddElements(array);

    expect(result).toBe(0);
  });

  it("should return the count of all odd numbers", () => {
    const array = [1, 2];
    const result = oddElements(array);

    expect(result).toBe(1);
  });

  it("should return the count of all odd numbers, even when string is passed", () => {
    const array = ["1", "2"];
    const result = oddElements(array);

    expect(result).toBe(1);
  });
});
