import { expect, it } from "vitest";
import { checkIfObjectIsIncluded } from "../dist/chapter2/task2-2-firstPart";

it("should return true or false if the passed object is added in the array or not", () => {
  const object = { name: "Mariya", age: 21 };
  const array = [18, ["cats, dogs"], object];
  const result = checkIfObjectIsIncluded(array, object);
  const resultFn = (array, object) => {
    if (array.includes(object)) {
      return true;
    } else {
      return false;
    }
  };
  expect(result).toBe(resultFn(array, object));
});
