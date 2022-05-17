import { it, expect, describe } from "vitest";
import { getObjectWeight } from "../../dist/chapter1/task1-5";

describe("getObjectWeight()", () => {
  it("should yield a TypeError if no parameter is provided", () => {
    const resultFn = () => {
      getObjectWeight();
    };
    expect(resultFn).toThrow("Cannot convert undefined or null to object");
  });

  it("should return the weight of the elements from a parameter object", () => {
    const object = { cards: 6, label: "Test" };
    const result = getObjectWeight(object);
    expect(result).toBe(12);
  });
});
