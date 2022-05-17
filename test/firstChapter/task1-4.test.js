import { it, expect, describe } from "vitest";
import { countTypes } from "../../dist/chapter1/task1-4";

describe("countTypes()", () => {
  it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      countTypes();
    };
    expect(resultFn).toThrow();
  });

  it("should return an object with the types which the given array parameter includes", () => {
    const array = [
      6,
      "Test",
      1,
      undefined,
      null,
      () => {
        console.log("Greetings!");
      },
      { count: 5 },
    ];
    const result = countTypes(array);
    const expectedResult = {
      nullCount: 1,
      objectsCount: 1,
      stringsCount: 1,
      numericsCount: 2,
      arraysCount: 0,
      undefinedCount: 2,
      datesCount: 0,
      booleansCount: 0,
      functionsCount: 1,
    };
    expect(result).toEqual(expectedResult);
  });
});
