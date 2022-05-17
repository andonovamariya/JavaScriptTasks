import { expect, it, describe } from "vitest";
import { appendingValuesAdvanced } from "../../dist/chapter2/task2-3-secondPart";

describe("appendingValuesAdvanced()", () => {
  it("should append to the first array: the values of the second array that are of Array type, when the index of the array child in the first array is even; the object elements from the second array, when the index is uneven ", () => {
    const array1 = [
      [1, 2, 3, 4],
      [5, 6],
    ];
    const array2 = [null, ["one", "five"], [1000, 1001], { name: "Mariya" }];
    const result = appendingValuesAdvanced(array1, array2);
    const expectedResult = [
      [1, 2, 3, 4, ["one", "five"], [1000, 1001]],
      [5, 6, ["one", "five"], [1000, 1001], { name: "Mariya" }],
    ];
    expect(result).toEqual(expectedResult);
  });

  it("should return a value of type Array", () => {
    const array1 = [
      [1, 2, 3, 4],
      [5, 6],
    ];
    const array2 = [null, ["one", "five"], [1000, 1001], { name: "Mariya" }];
    const result = appendingValuesAdvanced(array1, array2);
    expect(result).toBeInstanceOf(Array);
  });
});
