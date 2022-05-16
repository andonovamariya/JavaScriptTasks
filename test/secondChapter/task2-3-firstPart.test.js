import { expect, it } from "vitest";
import { appendTruthyValues } from "../../dist/chapter2/task2-3-firstPart";

it("should append all truthy values from the second array to the first found array element in the first array", () => {
  const array1 = [1, undefined, [1, 2, 3], "test"];
  const array2 = [null, ["First", "Found", "Array"], undefined, 6];
  const result = appendTruthyValues(array1, array2);
  const resultFn = (array1, array2) => {
    const firstFoundArrayElement = array1.find((element) => {
      return Array.isArray(element);
    });
    for (let i = 0; i < array2.length; i++) {
      if (array2[i]) {
        firstFoundArrayElement.push(array2[i]);
      }
    }
    return array1;
  };
  expect(result).toBe(resultFn(array1, array2));
});
