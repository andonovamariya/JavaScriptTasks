import { it, expect, describe } from "vitest";
import { findTheLongestWord } from "../../dist/chapter1/task1-6-secondPart";

describe("findTheLongestWord()", () => {
  it("should return the longest word which starts with a certain letter", () => {
    const string = "What we do in life echoes to eternity";
    const letter = "e";
    const result = findTheLongestWord(string, letter);
    const expectedResult = "eternity";

    expect(result).toBe(expectedResult);
  });

  it("should ignore symbols when finding the longest word", () => {
    const string = "What we do e!!!!!!!!!!! in life echoes to eternity";
    const letter = "e";
    const result = findTheLongestWord(string, letter);
    const expectedResult = "eternity";

    expect(result).toBe(expectedResult);
  });

  it("should return a warning when no word starts with the passed letter", () => {
    const string = "What we do in life echoes to eternity";
    const letter = "m";
    const result = findTheLongestWord(string, letter);
    const expectedResult =
      "There is no word starting with this letter in the sentence.";

    expect(result).toBe(expectedResult);
  });

  it("should be case sensitive when finding the longest word", () => {
    const string = "What we do in life echoes to eternity";
    const letter = "E";
    const result = findTheLongestWord(string, letter);
    const expectedResult =
      "There is no word starting with this letter in the sentence.";

    expect(result).toBe(expectedResult);
  });
});
