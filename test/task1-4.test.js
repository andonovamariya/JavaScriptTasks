import { it, expect } from "vitest";
import { replaceArrayKeys } from "../dist/chapter1/task1-4";

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    replaceArrayKeys();
  };
  expect(resultFn).toThrow();
});
