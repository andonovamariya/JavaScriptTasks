import { expect, it } from "vitest";
import { appendingValuesAdvanced } from "../../dist/chapter2/task2-3-secondPart";

it("should return ", () => {
  const array1 = [
    [1, 2, 3, 4],
    [5, 6],
  ];
  const array2 = [
    null,
    ["one", "five"],
    [1000, 1001],
  ];
  const result = appendingValuesAdvanced(array1, array2);
  const expectFn = (array1, array2) => {
    const foundArrays = array2.filter((el) => Array.isArray(el));
    const foundObjects = array2.filter(
      (el) =>
        typeof (el === "object") && el !== null && !(el instanceof Function)
    );
    for (let i = 0; i < array1.length; i++) {
      if (i % 2 === 0) {
        array1[i] = array1[i].concat(foundArrays);
      } else if (i % 2 !== 0) {
        array1[i] = array1[i].concat(foundObjects);
      }
    }
    return array1;
  };
  expect(result).toBe(expectFn(array1, array2));
});
