import { expect, it } from "vitest";
import { flatten } from "../dist/chapter2/task2-5";

it("should return the same array with every object in it flattened", () => {
  const array = [
    {
      firstPerson: { firstName: "Mariya", lastName: "Andonova" },
      secondPerson: { firstName: "Hristo", lastName: "Andonov" },
    },
  ];
  const result = flatten(array);
  const expectedFn = (array) => {
    let result = {};
    for (const i in array) {
      if (typeof array[i] === "object") {
        const recursedElement = flatten(array[i]);
        for (const j in recursedElement) {
          result[i + "_" + j] = recursedElement[j];
        }
      } else {
        result[i] = array[i];
      }
    }
    return result;
  };
  expect(result).toEqual(expectedFn(array));
});
