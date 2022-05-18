import { it, expect, describe } from "vitest";
import {
  findLongestWord,
  sortLongestWord,
  findLongestWordWithReduce,
} from "../../dist/chapter1/task1-6-firstPart";

describe("findLongestWord()", () => {
  it("should ignore characters which are not letters", () => {
    const string = "What we do in life echoes !!!!!!!!! to eternity";

    const result_findLongestWord = findLongestWord(string);

    expect(result_findLongestWord).toBe("eternity");
  });
  it("should yield an error if we don't pass a parameter to the function", () => {
    const resultFn_findLongestWord = () => {
      findLongestWord();
    };

    expect(resultFn_findLongestWord).toThrowError();
  });
  it("should yield an error if we pass an empty string to the function", () => {
    const string = "";

    const resultFn_findLongestWord = () => {
      findLongestWord(string);
    };

    expect(resultFn_findLongestWord).toThrowError();
  });
  it("should yield an error if we pass a string, containing only whitespace to the function", () => {
    const string = " ";

    const resultFn_findLongestWord = () => {
      findLongestWord(string);
    };

    expect(resultFn_findLongestWord).toThrow();
  });
});

describe("sortLongestWord()", () => {
  it("should ignore characters which are not letters", () => {
    const string = "What we do in life echoes !!!!!!!!! to eternity";

    const result_sortLongestWord = sortLongestWord(string);

    expect(result_sortLongestWord).toBe("eternity");
  });
  it("should yield an error if we don't pass a parameter to the function", () => {
    const resultFn_sortLongestWord = () => {
      sortLongestWord();
    };

    expect(resultFn_sortLongestWord).toThrow();
  });
  it("should yield an error if we pass an empty string to the function", () => {
    const string = "";

    const result_sortLongestWord = () => {
      sortLongestWord(string);
    };

    expect(result_sortLongestWord).toThrow();
  });
  it("should yield an error if we pass a string, containing only whitespace to the function", () => {
    const string = " ";

    const result_sortLongestWord = () => {
      sortLongestWord(string);
    };

    expect(result_sortLongestWord).toThrow();
  });
});

describe("findLongestWordWithReduce()", () => {
  it("should ignore characters which are not letters", () => {
    const string = "What we do in life echoes !!!!!!!!! to eternity";

    const result_findLongestWordWithReduce = findLongestWordWithReduce(string);

    expect(result_findLongestWordWithReduce).toBe("eternity");
  });
  it("should yield an error if we don't pass a parameter to the function", () => {
    const resultFn_findLongestWordWithReduce = () => {
      findLongestWordWithReduce();
    };

    expect(resultFn_findLongestWordWithReduce).toThrow();
  });
  it("should yield an error if we pass an empty string to the function", () => {
    const string = "";

    const result_findLongestWordWithReduce = () => {
      findLongestWordWithReduce(string);
    };

    expect(result_findLongestWordWithReduce).toThrow();
  });
  it("should yield an error if we pass a string, containing only whitespace to the function", () => {
    const string = " ";

    const result_findLongestWordWithReduce = () => {
      findLongestWordWithReduce(string);
    };

    expect(result_findLongestWordWithReduce).toThrow();
  });
});
