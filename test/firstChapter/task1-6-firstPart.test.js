import { it, expect } from "vitest";
import {
  findLongestWord,
  sortLongestWord,
  findLongestWordWithReduce,
} from "../../dist/chapter1/task1-6-firstPart";

it("should ignore characters which are not letters", () => {
  const string = "What we do in life echoes !!!!!!!!! to eternity";
  const result_findLongestWord = findLongestWord(string);
  const result_sortLongestWord = sortLongestWord(string);
  const result_findLongestWordWithReduce = findLongestWordWithReduce(string);
  const expectedFn = (string) => {
    const format = /[^a-zA-Z0-9 ]/g;
    let longestWord = "",
      wordSplit = string.replace(format, "").split(" ");
    for (let i = 0; i < wordSplit.length; i++) {
      if (wordSplit[i].length > longestWord.length) {
        longestWord = wordSplit[i];
      }
    }
    return longestWord;
  };
  expect(result_findLongestWord).toBe(expectedFn(string));
  expect(result_sortLongestWord).toBe(expectedFn(string));
  expect(result_findLongestWordWithReduce).toBe(expectedFn(string));
});
