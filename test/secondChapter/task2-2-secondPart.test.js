import { describe, expect, it } from "vitest";
import { checkIfObjectIsPresentDeep } from "../../dist/chapter2/task2-2-secondPart";

describe("checkIfObjectIsPresentDeep()", () => {
  it("should perfom a deep searh of an object in an array", () => {
    const object = { name: "Mariya", age: 21 };
    const array = [18, ["cats, dogs"], object];
    const result = checkIfObjectIsPresentDeep(array, object);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("should return a value of type boolean", () => {
    const object = { name: "Mariya", age: 21 };
    const array = [18, ["cats, dogs"], object];
    const result = checkIfObjectIsPresentDeep(array, object);
    expect(result).toBeTypeOf("boolean");
  });
});
