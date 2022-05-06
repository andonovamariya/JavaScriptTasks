"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SENTENCE = "What we do in life echoes to eternity";
const FORMAT = /[^a-zA-Z0-9 ]/g;
const findTheLongestWord = (string, letter) => {
    const stringWords = string.replace(FORMAT, "").split(" ");
    const isThereWordStartingWithPassedLetter = stringWords.some((word) => word.startsWith(letter));
    if (isThereWordStartingWithPassedLetter) {
        let index = stringWords.reduce((acc, curr, i) => {
            return curr.length >= stringWords[acc].length &&
                stringWords[i].startsWith(letter)
                ? i
                : acc;
        }, 0);
        return stringWords[index];
    }
    return "There is no word starting with this letter.";
};
console.log(findTheLongestWord(SENTENCE, "e"));
