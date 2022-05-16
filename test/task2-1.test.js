import { expect, it } from "vitest";
import { sortBubble, sortMinMax } from "../dist/chapter2/task2-1";

it("should return a sorted array", () => {
  const array = [3, 1, 2];
  const result_sortBubble = sortBubble(array);
  const result_sortMinMax = sortMinMax(array);
  const expectedResult_sortBubble = array.sort((n1, n2) => n1 - n2);
  const expectedResult_sortMinMax = array.sort((n1, n2) => n1 - n2);
  expect(result_sortBubble).toBe(expectedResult_sortBubble);
  expect(result_sortMinMax).toBe(expectedResult_sortMinMax);
});
