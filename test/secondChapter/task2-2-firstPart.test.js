import { describe, expect, it } from "vitest";
import { checkIfObjectIsIncluded } from "../../dist/chapter2/task2-2-firstPart";

describe("checkIfObjectIsIncluded()", () => {
  it("should return true or false if the passed object is added in the array or not", () => {
    const object = { name: "Mariya", age: 21 };
    const array = [18, ["cats, dogs"], object];
    const result = checkIfObjectIsIncluded(array, object);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("should return a value of type boolean", () => {
    const object = { name: "Mariya", age: 21 };
    const array = [18, ["cats, dogs"], object];
    const result = checkIfObjectIsIncluded(array, object);
    expect(result).toBeTypeOf("boolean");
  });
});
