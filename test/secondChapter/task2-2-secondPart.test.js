import { expect, it } from "vitest";
import { checkIfObjectIsPresentDeep } from "../../dist/chapter2/task2-2-secondPart";

it("should perfom a deep searh of an object in an array", () => {
  const object = { name: "Mariya", age: 21 };
  const array = [18, ["cats, dogs"], object];
  const result = checkIfObjectIsPresentDeep(array, object);
  const resultFn = (array, object) => {
    if (array.length === 0 || !object || !array) {
      return false;
    }
    if (array.includes(object)) {
      return true;
    } else if (
      array.find((item) => typeof item === "object" && Array.isArray(item))
    ) {
      checkIfObjectIsPresentDeep(item);
    }
  };
  expect(result).toBe(resultFn(array, object));
});
