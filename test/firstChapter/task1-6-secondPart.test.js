import { it, expect } from "vitest";
import { findTheLongestWord } from "../../dist/chapter1/task1-6-secondPart";

it("should return the longest word which starts with a certain letter", () => {
  const string = "What we do in life echoes !!!!!!!!! to eternity";
  const letter = "e";
  const result = findTheLongestWord(string, letter);
  const resultFn = (string, letter) => {
    const format = /[^a-zA-Z0-9 ]/g;
    const stringWords = string.replace(format, "").split(" ");
    const isThereWordStartingWithPassedLetter = stringWords.some((word) =>
      word.startsWith(letter)
    );
    if (isThereWordStartingWithPassedLetter) {
      let index = stringWords.reduce((acc, curr, i) => {
        return curr.length >= stringWords[acc].length &&
          stringWords[i].startsWith(letter)
          ? i
          : acc;
      }, 0);
      return stringWords[index];
    }
    return "There is no word starting with this letter in the sentence.";
  };

  expect(result).toBe(resultFn(string, letter));
});
