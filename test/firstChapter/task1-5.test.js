import { it, expect } from "vitest";
import { getObjectWeight } from "../../dist/chapter1/task1-5";

it("should yield a TypeError if no parameter is provided", () => {
  const resultFn = () => {
    getObjectWeight();
  };
  expect(resultFn).toThrow("Cannot convert undefined or null to object");
});
