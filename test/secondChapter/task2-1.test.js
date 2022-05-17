import { expect, it, describe } from "vitest";
import { sortBubble, sortMinMax } from "../../dist/chapter2/task2-1";

describe("sortBubble()", () => {
  it("should return a sorted array", () => {
    const array = [2, 1];
    const result = sortBubble(array);
    const expectedResult = [1, 2];
    expect(result).toEqual(expectedResult);
  });
  it("should return a value of type array", () => {
    const array = [2,1];
    const result = sortBubble(array);
    expect(result).instanceOf(Array);
  });
});

describe("sortMinMax()", () => {
  it("should return a sorted array", () => {
    const array = [2, 1];
    const result = sortMinMax(array);
    const expectedResult = [1, 2];
    expect(result).toEqual(expectedResult);
  });
  it("should return a value of type array", () => {
    const array = [2,1];
    const result = sortMinMax(array);
    expect(result).instanceOf(Array);
  });
});
